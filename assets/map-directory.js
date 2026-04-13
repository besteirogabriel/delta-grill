(function () {
    function unique(values) {
        return Array.from(new Set(values)).sort(function (a, b) {
            return a.localeCompare(b, "pt-BR");
        });
    }

    window.initDirectoryPage = function initDirectoryPage(options) {
        var data = options.data || [];
        var stateSelect = document.getElementById(options.stateSelectId);
        var citySelect = document.getElementById(options.citySelectId);
        var searchInput = document.getElementById(options.searchInputId);
        var results = document.getElementById(options.resultsId);
        var mapElement = document.getElementById(options.mapId);
        var center = options.center || [-14.235, -51.9253];
        var zoom = options.zoom || 4;
        var emptyMessage = options.emptyMessage || "Nenhum registro encontrado.";
        var map;
        var markerGroup;

        if (window.L && mapElement) {
            map = L.map(options.mapId).setView(center, zoom);
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 18,
                attribution: "&copy; OpenStreetMap"
            }).addTo(map);
            markerGroup = L.layerGroup().addTo(map);
        }

        function populateStates() {
            if (!stateSelect) return;
            stateSelect.innerHTML = '<option value="">Todos os estados</option>';
            unique(data.map(function (item) { return item.state; })).forEach(function (state) {
                var option = document.createElement("option");
                option.value = state;
                option.textContent = state;
                stateSelect.appendChild(option);
            });
        }

        function populateCities(state) {
            if (!citySelect) return;
            citySelect.innerHTML = '<option value="">Todas as cidades</option>';
            var cities = unique(
                data
                    .filter(function (item) { return !state || item.state === state; })
                    .map(function (item) { return item.city; })
            );
            cities.forEach(function (city) {
                var option = document.createElement("option");
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
            citySelect.disabled = cities.length === 0;
        }

        function renderMap(items) {
            if (!map || !markerGroup) return;
            markerGroup.clearLayers();

            if (!items.length) {
                map.setView(center, zoom);
                return;
            }

            items.forEach(function (item) {
                var marker = L.marker([item.lat, item.lng]).addTo(markerGroup);
                var popup = "<strong>" + item.name + "</strong><br>" +
                    item.city + " - " + item.state + "<br>" +
                    item.phone;
                if (item.note) {
                    popup += "<br>" + item.note;
                }
                marker.bindPopup(popup);
            });

            var bounds = L.featureGroup(markerGroup.getLayers()).getBounds();
            if (bounds.isValid()) {
                map.fitBounds(bounds.pad(0.2));
            }
        }

        function renderResults(items) {
            if (!results) return;
            results.innerHTML = "";

            if (!items.length) {
                var empty = document.createElement("div");
                empty.className = "directory-empty";
                empty.innerHTML = "<p>" + emptyMessage + "</p>";
                results.appendChild(empty);
                return;
            }

            items.forEach(function (item) {
                var card = document.createElement("div");
                card.className = "directory-item";
                card.innerHTML =
                    "<h4>" + item.name + "</h4>" +
                    "<p>" + (item.note || "Atendimento disponivel para a regiao.") + "</p>" +
                    "<span>" + item.city + " - " + item.state + "</span>" +
                    "<span>" + item.phone + "</span>";
                card.addEventListener("click", function () {
                    if (map) {
                        map.setView([item.lat, item.lng], 10, { animate: true });
                    }
                });
                results.appendChild(card);
            });
        }

        function applyFilters() {
            var state = stateSelect ? stateSelect.value : "";
            var city = citySelect ? citySelect.value : "";
            var query = searchInput ? searchInput.value.trim().toLowerCase() : "";

            var filtered = data.filter(function (item) {
                var byState = !state || item.state === state;
                var byCity = !city || item.city === city;
                var searchable = (item.name + " " + item.city + " " + item.state + " " + (item.note || "")).toLowerCase();
                var byQuery = !query || searchable.indexOf(query) !== -1;
                return byState && byCity && byQuery;
            });

            renderResults(filtered);
            renderMap(filtered);
        }

        populateStates();
        populateCities("");
        applyFilters();

        if (stateSelect) {
            stateSelect.addEventListener("change", function () {
                populateCities(stateSelect.value);
                applyFilters();
            });
        }

        if (citySelect) {
            citySelect.addEventListener("change", applyFilters);
        }

        if (searchInput) {
            searchInput.addEventListener("input", applyFilters);
        }
    };
})();
