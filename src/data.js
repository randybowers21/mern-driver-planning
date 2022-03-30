const planningOptions = [
    {
        name: 'On',
        loadedMiles: 0,
        deadHead: 0,
    },
    {
        name: 'Off',
        loadedMiles: 0,
        deadHead: 0,
    },
    {
        name: 'St George-Barstow',
        loadedMiles: 275,
        deadHead: 0,
    },
    {
        name: 'St George-SLC',
        loadedMiles: 300,
        deadHead: 0,
    },
    {
        name: 'SLC-St George',
        loadedMiles: 300,
        deadHead: 0,
    },
    {
        name: 'SLC-Cedar City',
        loadedMiles: 250,
        deadHead: 50,
    },
    {
        name: 'Barstow-St George',
        loadedMiles: 275,
        deadHead: 0,
    },
    {
        name: 'Barstow-Vegas',
        loadedMiles: 155,
        deadHead: 120,
    },
    {
        name: 'St George-Vegas',
        loadedMiles: 120,
        deadHead: 155,
    },
    {
        name: 'Vegas-Barstow',
        loadedMiles: 155,
        deadHead: 120,
    },
    {
        name: 'Empty-Barstow',
        loadedMiles: 0,
        deadHead: 275,
    },
    {
        name: 'Empty-Cedar',
        loadedMiles: 0,
        deadHead: 250,
    },
    {
        name: 'Empty-St George',
        loadedMiles: 0,
        deadHead: 300,
    },
]

const scheduleDays = ['Sunday-Thursday', 'Monday-Friday', 'Tuesday-Saturday']
const scheduleTimes = [
    '0500-1700',
    '1700-0500',
    '0800-2000',
    '2000-0800',
    '1000-2200',
    '2200-1000',
]
const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

const tractorNums = [363, 364, 365, 366, 367, 368, 369]

export { planningOptions, tractorNums, scheduleDays, scheduleTimes, weekDays }
