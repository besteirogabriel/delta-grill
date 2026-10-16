"""Validate local documents and anchors without third-party dependencies."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]

class Document(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.ids = []
        self.links = []
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        for key in ('href', 'src'):
            if attrs.get(key):
                self.links.append(attrs[key])

paths = list(ROOT.glob('*.html')) + list((ROOT / 'produtos').glob('*.html'))
documents = {path: Document(path.read_text()) for path in paths}
errors = []
for path, document in documents.items():
    if len(document.ids) != len(set(document.ids)):
        errors.append(f'{path.relative_to(ROOT)}: duplicate IDs')
    for value in document.links:
        target = urlsplit(value)
        if target.scheme or target.netloc or value == '#':
            continue
        destination = (path.parent / unquote(target.path)).resolve() if target.path else path
        if not destination.exists():
            errors.append(f'{path.relative_to(ROOT)}: missing {value}')
        elif target.fragment and destination in documents and target.fragment not in documents[destination].ids:
            errors.append(f'{path.relative_to(ROOT)}: missing anchor {value}')
print(f'Checked {len(documents)} pages; {len(errors)} issues')
for error in errors:
    print(error)
raise SystemExit(bool(errors))
