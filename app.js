// Master Dataset - Global Training Deliveries (2020 - Present)
const rawData = [
  {year:2020, country:"India", region:"Karnataka", city:"Bangalore", company:"ServiceMax", lat:12.9716, lng:77.5946, trainees:1},
  {year:2020, country:"India", region:"Karnataka", city:"Bangalore", company:"ServiceMax", lat:12.9716, lng:77.5946, trainees:41},
  {year:2020, country:"India", region:"Tamil Nadu", city:"Chennai", lat:13.0827, lng:80.2707, company:"ServiceMax", trainees:1},
  {year:2020, country:"USA", region:"Colorado", city:"Denver", lat:39.7645, lng:-105.1353, company:"ServiceMax", trainees:1},
  {year:2020, country:"USA", region:"California", city:"San Diego", lat:32.8248, lng:-117.3892, company:"ServiceMax", trainees:1},
  {year:2021, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"Cognizant", trainees:21},
  {year:2021, country:"India", region:"Telangana", city:"Hyderabad", lat:17.3850, lng:78.4867, company:"Cognizant", trainees:3},
  {year:2021, country:"India", region:"West Bengal", city:"Kolkata", lat:22.6764, lng:88.0495, company:"Cognizant", trainees:4},
  {year:2021, country:"India", region:"Uttar Pradesh", city:"Noida", lat:28.5170, lng:77.2611, company:"Cognizant", trainees:2},
  {year:2021, country:"India", region:"Maharashtra", city:"Pune", lat:18.5249, lng:73.7229, company:"Cognizant", trainees:6},
  {year:2021, country:"Netherlands", region:"UT", city:"Netherlands (Hq)", lat:52.1951, lng:3.0361, company:"Cognizant", trainees:2},
  {year:2021, country:"USA", region:"California", city:"Fullerton", lat:33.8895, lng:-117.9596, company:"Cognizant", trainees:2},
  {year:2022, country:"Australia", region:"NSW", city:"Sydney", lat:-33.8472, lng:150.6023, company:"ServiceMax", trainees:2},
  {year:2022, country:"China", region:"Shanghai", city:"Shanghai", lat:31.2304, lng:121.4737, company:"PTC", trainees:8},
  {year:2022, country:"China", region:"Guangdong", city:"Shenzhen", lat:22.5431, lng:114.0579, company:"PTC", trainees:2},
  {year:2022, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"Accenture", trainees:6},
  {year:2022, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"GE", trainees:1},
  {year:2022, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"GE Digital Hub", trainees:1},
  {year:2022, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"GE Healthcare", trainees:3},
  {year:2022, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"GEHC", trainees:1},
  {year:2022, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"Infosys", trainees:32},
  {year:2022, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"JCI", trainees:1},
  {year:2022, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"Medtronic", trainees:2},
  {year:2022, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"Merck Group", trainees:2},
  {year:2022, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"PTC", trainees:3},
  {year:2022, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"Philips", trainees:2},
  {year:2022, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"ServiceMax", trainees:8},
  {year:2022, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"Solventum", trainees:1},
  {year:2022, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"TechnipFMC", trainees:1},
  {year:2022, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"Vyaire", trainees:1},
  {year:2022, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"Wipro", trainees:1},
  {year:2022, country:"India", region:"Bihar", city:"Bhagalpur", lat:25.3478, lng:86.9824, company:"Infosys", trainees:1},
  {year:2022, country:"India", region:"Madhya Pradesh", city:"Bhopal", lat:23.2599, lng:77.4126, company:"Infosys", trainees:1},
  {year:2022, country:"India", region:"Chandigarh", city:"Chandigarh", lat:30.7333, lng:76.7794, company:"Infosys", trainees:1},
  {year:2022, country:"India", region:"Tamil Nadu", city:"Chennai", lat:13.0827, lng:80.2707, company:"Infosys", trainees:3},
  {year:2022, country:"India", region:"Delhi", city:"Delhi", lat:28.6139, lng:77.2090, company:"Horiba", trainees:10},
  {year:2022, country:"India", region:"Telangana", city:"Hyderabad", lat:17.3850, lng:78.4867, company:"Accenture", trainees:1},
  {year:2022, country:"India", region:"Telangana", city:"Hyderabad", lat:17.3850, lng:78.4867, company:"Infosys", trainees:4},
  {year:2022, country:"India", region:"Telangana", city:"Hyderabad", lat:17.3850, lng:78.4867, company:"Wipro", trainees:9},
  {year:2022, country:"India", region:"West Bengal", city:"Kolkata", lat:22.6764, lng:88.0495, company:"Accenture", trainees:5},
  {year:2022, country:"India", region:"Maharashtra", city:"Pune", lat:18.5249, lng:73.7229, company:"Accenture", trainees:2},
  {year:2022, country:"India", region:"Maharashtra", city:"Pune", lat:18.5249, lng:73.7229, company:"GE Healthcare", trainees:1},
  {year:2022, country:"India", region:"Maharashtra", city:"Pune", lat:18.5249, lng:73.7229, company:"Infosys", trainees:3},
  {year:2022, country:"Romania", region:"Bucharest", city:"Bucharest", lat:44.4380, lng:25.9298, company:"SIG", trainees:1},
  {year:2022, country:"Romania", region:"Cluj", city:"Cluj-Napoca", lat:46.7712, lng:23.6236, company:"SIG", trainees:1},
  {year:2022, country:"Spain", region:"Catalonia", city:"Barcelona", lat:41.3928, lng:2.0578, company:"Schneider Electric", trainees:2},
  {year:2022, country:"Sweden", region:"Stockholm", city:"Stockholm", lat:59.3579, lng:17.4384, company:"Mycronic", trainees:1},
  {year:2022, country:"Sweden", region:"Stockholm", city:"Stockholm", lat:59.3579, lng:17.4384, company:"Veolia Sweden", trainees:1},
  {year:2022, country:"UK", region:"Cambridgeshire", city:"Cambridgeshire", lat:52.3719, lng:-0.6521, company:"Domino", trainees:2},
  {year:2022, country:"UK", region:"London", city:"London", lat:51.5287, lng:-0.3241, company:"LivaNova", trainees:1},
  {year:2022, country:"UK", region:"London", city:"London", lat:51.5287, lng:-0.3241, company:"Molecular Devices", trainees:1},
  {year:2022, country:"USA", region:"Maryland", city:"Baltimore", lat:39.2848, lng:-76.7029, company:"ServiceMax", trainees:1},
  {year:2022, country:"USA", region:"Florida", city:"Clearwater", lat:27.9926, lng:-82.8038, company:"Philips", trainees:1},
  {year:2022, country:"USA", region:"Texas", city:"Houston", lat:29.7604, lng:-95.3698, company:"ServiceMax", trainees:7},
  {year:2022, country:"USA", region:"Nevada", city:"Las Vegas", lat:36.1699, lng:-115.1398, company:"Everi", trainees:1},
  {year:2022, country:"USA", region:"Nevada", city:"Las Vegas", lat:36.1699, lng:-115.1398, company:"Light & Wonder", trainees:3},
  {year:2022, country:"USA", region:"New Jersey", city:"Maple Shade", lat:39.9531, lng:-74.9941, company:"Eastern Lift Truck", trainees:1},
  {year:2022, country:"USA", region:"Illinois", city:"Mettawa", lat:42.2697, lng:-87.9284, company:"Vyaire Medical", trainees:3},
  {year:2022, country:"USA", region:"Minnesota", city:"Minneapolis", lat:44.9706, lng:-93.3440, company:"ServiceMax", trainees:1},
  {year:2022, country:"USA", region:"Mississippi", city:"Mississippi", lat:32.5450, lng:-74.4057, company:"FedEx", trainees:1},
  {year:2022, country:"USA", region:"California", city:"Pleasanton", lat:37.6624, lng:-121.8747, company:"ServiceMax", trainees:8},
  {year:2022, country:"USA", region:"New Hampshire", city:"Portsmouth", lat:43.0718, lng:-70.7626, company:"Analogic", trainees:1},
  {year:2022, country:"USA", region:"New Jersey", city:"Rahway", lat:40.6076, lng:-74.2776, company:"Merck Group", trainees:1},
  {year:2022, country:"USA", region:"California", city:"San Jose", lat:37.2963, lng:-121.9806, company:"ServiceMax", trainees:2},
  {year:2022, country:"USA", region:"Arizona", city:"Tucson", lat:32.2576, lng:-111.0962, company:"American Express", trainees:1},
  {year:2022, country:"USA", region:"Kansas", city:"Wamego", lat:39.2030, lng:-96.3025, company:"HMT Tank", trainees:1},
  {year:2022, country:"USA", region:"Massachusetts", city:"Wayland", lat:42.3606, lng:-71.3617, company:"Candela Medical", trainees:1},
  {year:2022, country:"USA", region:"Indiana", city:"Zionsville", lat:39.9509, lng:-86.2661, company:"dormakaba", trainees:1},
  {year:2023, country:"Australia", region:"Victoria", city:"Melbourne", lat:-37.9696, lng:144.3937, company:"TechForce", trainees:1},
  {year:2023, country:"Australia", region:"NSW", city:"Sydney", lat:-33.8472, lng:150.6023, company:"TechForce", trainees:1},
  {year:2023, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"Alcon", trainees:7},
  {year:2023, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"Johnson Controls", trainees:1},
  {year:2023, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"Schneider Electric", trainees:2},
  {year:2023, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"ServiceMax", trainees:1},
  {year:2023, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"Vyaire Medical", trainees:1},
  {year:2023, country:"India", region:"Telangana", city:"Hyderabad", lat:17.3850, lng:78.4867, company:"TechForce", trainees:1},
  {year:2023, country:"India", region:"Telangana", city:"Hyderabad", lat:17.3850, lng:78.4867, company:"Vyaire Medical", trainees:1},
  {year:2023, country:"India", region:"Maharashtra", city:"Pune", lat:18.5249, lng:73.7229, company:"Johnson Controls India", trainees:1},
  {year:2023, country:"India", region:"Kerala", city:"Thrissur", lat:10.5115, lng:76.1408, company:"TechForce", trainees:1},
  {year:2023, country:"UK", region:"Cambridgeshire", city:"Bar Hill", lat:52.2495, lng:0.0140, company:"Domino", trainees:1},
  {year:2023, country:"USA", region:"Massachusetts", city:"Boston", lat:42.3601, lng:-71.0589, company:"PTC", trainees:2},
  {year:2023, country:"USA", region:"Illinois", city:"Chicago", lat:41.8781, lng:-87.6298, company:"Metra RR", trainees:2},
  {year:2023, country:"USA", region:"Texas", city:"Houston", lat:29.7604, lng:-95.3698, company:"LivaNova", trainees:1},
  {year:2023, country:"USA", region:"Nevada", city:"Las Vegas", lat:36.1699, lng:-115.1398, company:"Light & Wonder", trainees:1},
  {year:2023, country:"USA", region:"Tennessee", city:"Memphis", lat:35.1495, lng:-90.0490, company:"FedEx", trainees:1},
  {year:2023, country:"USA", region:"California", city:"Pleasanton", lat:37.6624, lng:-121.8747, company:"ServiceMax", trainees:7},
  {year:2023, country:"USA", region:"New Hampshire", city:"Portsmouth", lat:43.0718, lng:-70.7626, company:"Analogic", trainees:1},
  {year:2024, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"Alcon", trainees:2},
  {year:2024, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"IT Shoulders", trainees:1},
  {year:2024, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"PTC", trainees:7},
  {year:2024, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"ServiceMax", trainees:2},
  {year:2024, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"Solventum", trainees:1},
  {year:2024, country:"India", region:"Telangana", city:"Hyderabad", lat:17.3850, lng:78.4867, company:"Medtronic", trainees:1},
  {year:2024, country:"India", region:"Telangana", city:"Hyderabad", lat:17.3850, lng:78.4867, company:"TechnipFMC", trainees:1},
  {year:2024, country:"Romania", region:"Cluj", city:"Cluj-Napoca", lat:46.7712, lng:23.6236, company:"SIG", trainees:2},
  {year:2024, country:"UK", region:"Cambridgeshire", city:"Bar Hill", lat:52.2495, lng:0.0140, company:"Domino", trainees:1},
  {year:2024, country:"USA", region:"Massachusetts", city:"Boston", lat:42.3601, lng:-71.0589, company:"PTC", trainees:5},
  {year:2024, country:"USA", region:"California", city:"Brea", lat:33.9167, lng:-117.9000, company:"Beckman Coulter", trainees:2},
  {year:2024, country:"USA", region:"Illinois", city:"Chicago", lat:41.8781, lng:-87.6298, company:"Metra RR", trainees:2},
  {year:2024, country:"USA", region:"California", city:"Hawthorne", lat:33.9164, lng:-118.3526, company:"Rapiscan Systems", trainees:2},
  {year:2024, country:"USA", region:"Wisconsin", city:"Milwaukee", lat:43.0389, lng:-87.9065, company:"Rockwell Automation", trainees:3},
  {year:2024, country:"USA", region:"Pennsylvania", city:"Pittsburgh", lat:40.4406, lng:-79.9959, company:"Wabtec", trainees:2},
  {year:2024, country:"USA", region:"California", city:"Pleasanton", lat:37.6624, lng:-121.8747, company:"ServiceMax", trainees:1},
  {year:2024, country:"USA", region:"Massachusetts", city:"Wilmington", lat:42.5453, lng:-71.1636, company:"CRL", trainees:1},
  {year:2024, country:"USA", region:"California", city:"Woodland Hills", lat:34.1684, lng:-118.6059, company:"WASH Laundry", trainees:2},
  {year:2025, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"Accenture", trainees:3},
  {year:2025, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"Alcon", trainees:5},
  {year:2025, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"Johnson Controls", trainees:2},
  {year:2025, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"PTC", trainees:2},
  {year:2025, country:"India", region:"Karnataka", city:"Bangalore", lat:12.9716, lng:77.5946, company:"WASH Laundry", trainees:2},
  {year:2025, country:"India", region:"Telangana", city:"Hyderabad", lat:17.3850, lng:78.4867, company:"Carrier", trainees:1},
  {year:2025, country:"India", region:"Telangana", city:"Hyderabad", lat:17.3850, lng:78.4867, company:"Illumina", trainees:2},
  {year:2025, country:"India", region:"Telangana", city:"Hyderabad", lat:17.3850, lng:78.4867, company:"Pitney Bowes", trainees:1},
  {year:2025, country:"USA", region:"Texas", city:"Fort Worth", lat:32.7555, lng:-97.3308, company:"Alcon", trainees:1},
  {year:2025, country:"USA", region:"California", city:"Hawthorne", lat:33.9164, lng:-118.3526, company:"Rapiscan Systems", trainees:1},
  {year:2025, country:"USA", region:"Michigan", city:"Kalamazoo", lat:42.2917, lng:-85.5872, company:"Stryker", trainees:1},
  {year:2025, country:"USA", region:"Massachusetts", city:"Marlborough", lat:42.3487, lng:-71.5523, company:"Boston Scientific", trainees:2},
  {year:2025, country:"USA", region:"Wisconsin", city:"Milwaukee", lat:43.0389, lng:-87.9065, company:"Johnson Controls", trainees:1},
  {year:2025, country:"USA", region:"New York", city:"New York", lat:40.7128, lng:-74.0060, company:"Accenture", trainees:1},
  {year:2025, country:"USA", region:"Florida", city:"Palm Beach Gardens", lat:26.8338, lng:-80.1225, company:"Carrier", trainees:3},
  {year:2025, country:"USA", region:"Massachusetts", city:"Waltham", lat:42.3765, lng:-71.2356, company:"Thermo Fisher Scientific", trainees:1},
//Portfolio Expansion Dataset
{year:2023, country:"Malaysia", region:"Selangor", city:"Kuala Lumpur", lat:3.1390, lng:101.6869, company:"Alcon Malaysia", trainees:4},
{year:2024, country:"Saudi Arabia", region:"Eastern Province", city:"Dammam", lat:26.4207, lng:50.0888, company:"AFMS", trainees:3},
{year:2024, country:"Belgium", region:"Flanders", city:"Antwerp", lat:51.2194, lng:4.4025, company:"Vincotte", trainees:2},
{year:2024, country:"Poland", region:"Masovian", city:"Warsaw", lat:52.2297, lng:21.0122, company:"Craftware", trainees:3},
{year:2025, country:"Japan", region:"Tokyo", city:"Tokyo", lat:35.6762, lng:139.6503, company:"Sony", trainees:2},
{year:2024, country:"Japan", region:"Tokyo", city:"Tokyo", lat:35.6762, lng:139.6503, company:"Topcon", trainees:2},
{year:2022, country:"Japan", region:"Tokyo", city:"Tokyo", lat:35.6762, lng:139.6503, company:"Horiba", trainees:2},
{year:2024, country:"USA", region:"Texas", city:"Houston", lat:29.7604, lng:-95.3698, company:"Baker Hughes", trainees:3},
{year:2023, country:"USA", region:"New York", city:"Rochester", lat:43.1566, lng:-77.6088, company:"Kodak", trainees:2},
{year:2024, country:"USA", region:"Texas", city:"Austin", lat:30.2672, lng:-97.7431, company:"Luminex", trainees:2},
{year:2025, country:"USA", region:"Ohio", city:"Newbury", lat:41.4620, lng:-81.2034, company:"Kinetico", trainees:2},
{year:2024, country:"USA", region:"New York", city:"Rye Brook", lat:41.0018, lng:-73.6846, company:"Xylem", trainees:2},
{year:2022, country:"Netherlands", region:"Overijssel", city:"Almelo", lat:52.3567, lng:6.6625, company:"Malvern Panalytical", trainees:2},
{year:2025, country:"Sweden", region:"Stockholm", city:"Stockholm", lat:59.3293, lng:18.0686, company:"Elekta", trainees:2},
{year:2024, country:"Iceland", region:"Capital Region", city:"Reykjavik", lat:64.1466, lng:-21.9426, company:"Marel", trainees:2},
{year:2024, country:"USA", region:"North Carolina", city:"Charlotte", lat:35.2271, lng:-80.8431, company:"LiftOne", trainees:2},
{year:2024, country:"USA", region:"Michigan", city:"Brighton", lat:42.5295, lng:-83.7802, company:"Lowry Solutions", trainees:2}
];

// Application State Management
let activeYear = 'All';
let activeRegion = 'All';
let searchQuery = '';
let map;
let markersGroup;
let activeMarkers = {}; // Store marker refs indexed by "lat_lng" for sidebar clicks
let currentMetrics = { deliveries: 0, participants: 0, cities: 0, countries: 0 };

// Initialize Dashboard Application
function initApp() {
    initMap();
    setupEventHandlers();
    renderDashboard();
    initRoadmapTabs();
}

// Initialize Leaflet Map Engine
function initMap() {
    // Zoom control at bottom right to clear up HUD panels
    map = L.map('map', {
        zoomControl: false,
        attributionControl: false,
        minZoom: 1.5,
        maxZoom: 12
    }).setView([20, 10], 2);

    // Using CartoDB Dark Matter tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 18
    }).addTo(map);

    markersGroup = L.layerGroup().addTo(map);
}

// Setup Event Listeners & UI Binding
function setupEventHandlers() {
    // Region Filter Buttons
    document.querySelectorAll('.region-toggles .toggle-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.region-toggles .toggle-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeRegion = btn.getAttribute('data-region');
            renderDashboard();
            adjustMapFocus();
        });
    });

    // Timeline Buttons
    document.querySelectorAll('.timeline-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.timeline-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeYear = btn.getAttribute('data-year');
            
            // Update Label Text
            const labelEl = document.getElementById('active-year-label');
            if (activeYear === 'All') {
                labelEl.innerText = 'All Years (Cumulative)';
            } else {
                labelEl.innerText = `Year focus: ${activeYear}`;
            }
            renderDashboard();
        });
    });

    // Recenter View
    document.getElementById('map-recenter-btn').addEventListener('click', adjustMapFocus);

    // Search ledger filter
    document.getElementById('city-search').addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        refreshLedgerList();
    });

    // Export dataset button
    document.getElementById('download-dataset-btn').addEventListener('click', exportDataset);
}

// Render Dashboard Data & Visual Elements
function renderDashboard() {
    markersGroup.clearLayers();
    activeMarkers = {};

    let totalDeliveries = 0;
    let totalParticipants = 0;
    let countriesSet = new Set();
    let citiesSet = new Set();
    let companiesSet = new Set();

    // Grouping coordinate details to prevent overlapping bubbles
    const consolidatedLocations = {};

    rawData.forEach(row => {
        // Timeline Filter
        if (activeYear !== 'All' && row.year !== parseInt(activeYear)) return;

        // Region Filter
        if (activeRegion === 'APAC') {
            const apacList = ['India', 'China', 'Malaysia', 'Singapore', 'Japan', 'South Korea', 'Thailand', 'Indonesia', 'Vietnam', 'Philippines', 'Australia', 'New Zealand'];
            if (!apacList.includes(row.country)) return;
        }
        if (activeRegion === 'North America') {
            const naList = ['USA', 'Canada', 'Mexico'];
            if (!naList.includes(row.country)) return;
        }
        if (activeRegion === 'Europe') {
            const europeList = ['UK', 'Romania', 'Netherlands', 'Sweden', 'Spain'];
            if (!europeList.includes(row.country)) return;
        }

        totalDeliveries++;
        totalParticipants += row.trainees;
        countriesSet.add(row.country);
        citiesSet.add(row.city);
        companiesSet.add(row.company);

        const mapKey = `${row.lat.toFixed(4)}_${row.lng.toFixed(4)}`;
        if (!consolidatedLocations[mapKey]) {
            consolidatedLocations[mapKey] = {
                city: row.city,
                country: row.country,
                region: row.region,
                lat: row.lat,
                lng: row.lng,
                trainees: 0,
                deliveries: 0,
                companies: new Set(),
                years: new Set()
            };
        }

        consolidatedLocations[mapKey].trainees += row.trainees;
        consolidatedLocations[mapKey].deliveries += 1;
        consolidatedLocations[mapKey].companies.add(row.company);
        consolidatedLocations[mapKey].years.add(row.year);
    });

    // Animate KPI Counters
    animateCountUp('count-deliveries', currentMetrics.deliveries, totalDeliveries, 800);
    animateCountUp('count-participants', currentMetrics.participants, totalParticipants, 800);
    animateCountUp('count-cities', currentMetrics.cities, citiesSet.size, 800);
    animateCountUp('count-countries', currentMetrics.countries, countriesSet.size, 800);

    // Save metric state for future animations
    currentMetrics = {
        deliveries: totalDeliveries,
        participants: totalParticipants,
        cities: citiesSet.size,
        countries: countriesSet.size
    };

    // Update Company count in LedgerHeader
    document.getElementById('ledger-companies-count').innerText = companiesSet.size;

    // Save consolidated items to global context for search
    window.activeConsolidatedLocations = Object.values(consolidatedLocations);
    refreshLedgerList();

    // Paint Map Marker Circle Layers
    window.activeConsolidatedLocations.forEach(loc => {
        // Logarithmic scale for radius visualization
        const bubbleRadius = Math.max(7, Math.sqrt(loc.trainees) * 2.8);

        const marker = L.circleMarker([loc.lat, loc.lng], {
            radius: bubbleRadius,
            fillColor: '#f59e0b',
            color: '#fbbf24',
            weight: 1,
            opacity: 0.9,
            fillOpacity: 0.4
        });

        const sortedCompanies = Array.from(loc.companies).sort().join(', ');
        const sortedYears = Array.from(loc.years).sort().join(', ');

        const popupContent = `
            <div class="popup-title">${loc.city}, ${loc.country}</div>
            <div class="popup-row">
                <span class="popup-label">Deliveries:</span>
                <span class="popup-val">${loc.deliveries}</span>
            </div>
            <div class="popup-row">
                <span class="popup-label">Participants:</span>
                <span class="popup-val">${loc.trainees}</span>
            </div>
            <div class="popup-row">
                <span class="popup-label">Active Years:</span>
                <span class="popup-val">${sortedYears}</span>
            </div>
            <div class="popup-row" style="margin-top: 0.5rem; border-top: 1px solid var(--border-color); padding-top: 0.5rem; flex-direction: column;">
                <span class="popup-label" style="margin-bottom: 0.15rem;">Companies Trained:</span>
                <span class="popup-val" style="color: #d1d5db; font-weight: normal; font-size: 0.75rem;">${sortedCompanies}</span>
            </div>
        `;

        marker.bindPopup(popupContent, { maxWidth: 280, closeButton: false });

        // Hover events
        marker.on('mouseover', function() {
            this.setStyle({
                fillOpacity: 0.7,
                weight: 2,
                color: '#ffffff'
            });
        });
        marker.on('mouseout', function() {
            this.setStyle({
                fillOpacity: 0.4,
                weight: 1,
                color: '#fbbf24'
            });
        });

        // Store reference for sidebar triggers
        const key = `${loc.lat.toFixed(4)}_${loc.lng.toFixed(4)}`;
        activeMarkers[key] = marker;

        markersGroup.addLayer(marker);
    });
}

// Refresh & Filter the Ledger List Sidebar
function refreshLedgerList() {
    const listContainer = document.getElementById('ledger-list');
    listContainer.innerHTML = '';

    // Filter consolidated locations by search input
    const filtered = window.activeConsolidatedLocations.filter(loc => {
        const query = searchQuery.toLowerCase();
        return loc.city.toLowerCase().includes(query) ||
               loc.country.toLowerCase().includes(query) ||
               Array.from(loc.companies).some(c => c.toLowerCase().includes(query));
    });

    // Sort locations: highest deliveries first
    filtered.sort((a, b) => b.deliveries - a.deliveries || b.trainees - a.trainees);

    if (filtered.length === 0) {
        listContainer.innerHTML = '<div class="ledger-placeholder">No matching records found.</div>';
        return;
    }

    filtered.forEach(loc => {
        const card = document.createElement('div');
        card.className = 'city-ledger-card';
        
        const key = `${loc.lat.toFixed(4)}_${loc.lng.toFixed(4)}`;
        card.setAttribute('data-loc-key', key);

        const companiesList = Array.from(loc.companies).sort().join(', ');

        card.innerHTML = `
            <div class="ledger-card-header">
                <span class="ledger-city-name">${loc.city}, ${loc.country}</span>
                <span class="ledger-deliveries-pill">${loc.deliveries} del</span>
            </div>
            <div class="ledger-card-row">
                <span class="ledger-row-label">Trainees:</span>
                <span class="ledger-row-val">${loc.trainees}</span>
            </div>
            <div class="ledger-card-row">
                <span class="ledger-row-label">Years:</span>
                <span class="ledger-row-val">${Array.from(loc.years).sort().join(', ')}</span>
            </div>
            <div class="ledger-companies-list">${companiesList}</div>
        `;

        // Click on Sidebar item triggers Map pan and popup open
        card.addEventListener('click', () => {
            const markerRef = activeMarkers[key];
            if (markerRef) {
                map.setView([loc.lat, loc.lng], 8);
                setTimeout(() => {
                    markerRef.openPopup();
                }, 200);
            }
        });

        listContainer.appendChild(card);
    });
}

// Adjust viewport focus based on selected Region
function adjustMapFocus() {
    if (activeRegion === 'APAC') {
        map.setView([20, 105], 3);
    } else if (activeRegion === 'North America') {
        map.setView([39.8283, -98.5795], 3);
    } else if (activeRegion === 'Europe') {
        map.setView([52, 15], 4);
    } else {
        map.setView([20, 10], 2);
    }
}

// Animate values counting up
function animateCountUp(id, start, end, duration) {
    const obj = document.getElementById(id);
    if (!obj) return;
    
    if (start === end) {
        obj.innerText = end;
        return;
    }

    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const safeStepTime = Math.max(stepTime, 10); // Minimum 10ms interval

    const timer = setInterval(() => {
        if (range > 0) {
            // Count Up
            const addVal = Math.ceil(range / (duration / safeStepTime));
            current += addVal;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }
        } else {
            // Count Down
            const subVal = Math.ceil(Math.abs(range) / (duration / safeStepTime));
            current -= subVal;
            if (current <= end) {
                current = end;
                clearInterval(timer);
            }
        }
        obj.innerText = current;
    }, safeStepTime);
}

// Roadmap Vision tab selections
const roadmapData = {
    'use-cases': {
        title: 'Industry Use-Case Explorer',
        tag: 'RESEARCH BLUEPRINT',
        desc: 'An upcoming interactive flow diagram engine maps out end-to-end ServiceMax & Salesforce service paths tailored by industry. Explore templates for field technician dispatch, automated warranties, and recall logistics for Life Sciences and Industrial Utilities.',
        status: 'Under Active Development',
        statusClass: 'dev',
        bullets: [
            '<strong>Focus:</strong> Detailed process diagrams mapping object integrations.',
            '<strong>Tech:</strong> Interactive SVG canvases linked with configuration manuals.',
            '<strong>Target Launch:</strong> Q3 2026.'
        ]
    },
    'best-practices': {
        title: 'ServiceMax Best Practices Library',
        tag: 'KNOWLEDGE REPOSITORY',
        desc: 'A curated checklist of configuration guidelines for ServiceMax Core and ServiceMax Go app. Covering optimal Installed Base structure design, Entitlement Verification sequences, and preventative maintenance scheduling to avoid governor limits.',
        status: 'In Planning Phase',
        statusClass: 'plan',
        bullets: [
            '<strong>Focus:</strong> Installed Base design models & Entitlement scripts.',
            '<strong>Format:</strong> Markdown guidelines, code templates, and benchmark checklists.',
            '<strong>Target Launch:</strong> Q4 2026.'
        ]
    },
    'timeline': {
        title: 'Interactive Engagement Timeline',
        tag: 'IMPACT PORTFOLIO',
        desc: 'A detailed interactive chronological roadmap of key consulting engagements since 2017. Track specific project milestones, upgrades from SVMx Classic to ServiceMax Core, and deployment logs for ServiceMax Go app integrations.',
        status: 'In Planning Phase',
        statusClass: 'plan',
        bullets: [
            '<strong>Focus:</strong> Structural system design case logs.',
            '<strong>Interface:</strong> Vertical scroll timeline with system architecture diagrams.',
            '<strong>Target Launch:</strong> Q1 2027.'
        ]
    },
    'insights': {
        title: 'Field Service Insights Hub',
        tag: 'THOUGHT LEADERSHIP',
        desc: 'Publishing deep-dives and whitepapers analyzing the intersection of generative AI, predictive maintenance telemetry, and Salesforce Field Service. Read analytical reports detailing asset uptime metrics and technician optimization.',
        status: 'Under Active Development',
        statusClass: 'dev',
        bullets: [
            '<strong>Focus:</strong> Telemetry integrations & scheduling optimization whitepapers.',
            '<strong>Format:</strong> Monthly newsletters and structural code audits.',
            '<strong>Target Launch:</strong> Q4 2026.'
        ]
    },
    'video': {
        title: 'Video Adoption Library',
        tag: 'ENABLEMENT MEDIA',
        desc: 'A series of micro-learning videos covering field execution tricks: from offline sync optimization tips to configuring PM processes. Short, visual screen captures designed to accelerate user adoption for dispatch coordinators and service leads.',
        status: 'Under Active Development',
        statusClass: 'dev',
        bullets: [
            '<strong>Focus:</strong> System configurations & mobile user interfaces.',
            '<strong>Format:</strong> 5-minute technical screencasts.',
            '<strong>Target Launch:</strong> Q3 2026.'
        ]
    }
};

function initRoadmapTabs() {
    const buttons = document.querySelectorAll('.roadmap-menu-btn');
    const board = document.getElementById('roadmap-board');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const id = btn.getAttribute('data-roadmap-id');
            const data = roadmapData[id];
            
            if (data) {
                // Populate content board
                board.innerHTML = `
                    <div class="roadmap-header-detail">
                        <span class="roadmap-tag">${data.tag}</span>
                        <h3 class="roadmap-detail-title">${data.title}</h3>
                    </div>
                    <div class="roadmap-detail-body">
                        <p class="roadmap-description">${data.desc}</p>
                        <div class="roadmap-bullets">
                            <div class="bullet-item">
                                <strong>Status:</strong> <span class="status-pill-sub ${data.statusClass}">${data.status}</span>
                            </div>
                            ${data.bullets.map(b => `<div class="bullet-item">${b}</div>`).join('')}
                        </div>
                    </div>
                    <div class="roadmap-action">
                        <button class="request-btn" onclick="requestRoadmapPreview('${data.title}')">
                            Request Early Access Preview
                        </button>
                    </div>
                `;
            }
        });
    });
}

// Request early access action
window.requestRoadmapPreview = function(title) {
    alert(`Thank you for your interest in the upcoming "${title}" framework.\n\nAn early draft or preview details will be shared with you as soon as they become available. Keep an eye on your email!`);
};

// Export raw training dataset in JSON format
function exportDataset() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(rawData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "chaitanya_mehandru_training_footprint.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

// Trigger frame boot
window.addEventListener('DOMContentLoaded', initApp);
