const tractors = {
    363: {
        dayDriver: {
            name: 'Wes Fenus',
            schedule: {
                days: 'Mon-Fri',
                time: '0500-1700'
            }
        },
        nightDriver: {
            name: 'Open',
            schedule: {
                days: 'Tue-Sat',
                time: '0500-1700'
            }
        }
    },
    364: {
        dayDriver: {
            name: 'Jim Georgio',
            schedule: {
                days: 'Mon-Fri',
                time: '0500-1700'
            }
        },
        nightDriver: {
            name: 'Jason Must',
            schedule: {
                days: 'Mon-Fri',
                time: '1700-0500'
            }
        }
    },
    365: {
        dayDriver: {
            name: 'Tom Rivera',
            schedule: {
                days: 'Tue-Sat',
                time: '0800-2000'
            }
        },
        nightDriver: {
            name: 'Open',
            schedule: {
                days: 'Sun-Thur',
                time: '2000-0800'
            }
        }
    },
    366: {
        dayDriver: {
            name: 'Tom Ellis',
            schedule: {
                days: 'Mon-Fri',
                time: '0500-1700'
            }
        },
        nightDriver: {
            name: 'Ted Taylor',
            schedule: {
                days: 'Sun-Thur',
                time: '1700-0500'
            }
        }
    },
    367: {
        dayDriver: {
            name: 'Dean Holmstead',
            schedule: {
                days: 'Mon-Fri',
                time: '0500-1700'
            }
        },
        nightDriver: {
            name: 'Open',
            schedule: {
                days: 'Tue-Sat',
                time: '1700-0500'
            }
        }
    },
    368: { 
        dayDriver: {
        name: 'Ed Young',
        schedule: {
            days: 'Sun-Thur',
            time: '1000-2200'
        }
    },
    nightDriver: {
        name: 'Andrew Ratliff',
        schedule: {
            days: 'Sun-Thur',
            time: '2200-1000'
        }
    }

    },
    369: {
        dayDriver: {
            name: 'Mike Farris',
            schedule: {
                days: 'Mon-Fri',
                time: '0500-1700'
            }
        },
        nightDriver: {
            name: 'Marilyn Reeves',
            schedule: {
                days: 'Tue-Sat',
                time: '1700-0500'
            }
        }
    },
}
const planningOptions = [
    {
        name: 'On',
        deadHead: 0,
    },
    {
        name: 'Off',
        deadHead: 0,
    },
    {
        name: 'South',
        deadHead: 0,
    },
    {
        name: 'North',
        deadHead: 0,
    },
    {
        Name: 'Return',
        deadHead: 0
    },
    {
        Name: 'Barstow-Vegas',
        deadHead: 120
    },
    {
        name: 'St George-Vegas',
        deadHead: 155,
    },
    {
        name: 'Vegas-Barstow',
        deadHead: 120,
    },
    {
        name: 'Empty-Barstow',
        deadHead: 275
    },
    {
        name: 'Empty-Cedar',
        deadHead: 250
    },
    {
        name: 'Empty-St George',
        deadHead: 300
    },
]
const fakeWeek = {
    monday: {
        day: {
            start: 'South',
            end: 'Return'
        },
        night: {
            start: 'North',
            end: 'Empty-Cedar'
        },
    },
    tuesday: {
        day: {
            start: 'Vegas-Barstow',
            end: 'Return'
        },
        night: {
            start: 'North',
            end: 'Return'
        },
    },
    wednesday: {
        day: {
            start: 'South',
            end: 'Return'
        },
        night: {
            start: 'North',
            end: 'Return'
        },
    },
    thursday: {
        day: {
            start: 'South',
            end: 'Return'
        },
        night: {
            start: 'North',
            end: 'Return'
        },
    },
    friday: {
        day: {
            start: 'South',
            end: 'Return'
        },
        night: {
            start: 'North',
            end: 'Return'
        },
    },
    saturday: {
        day: {
            start: 'Off',
            end: 'Off'
        },
        night: {
            start: 'Off',
            end: 'Off'
        },
    },
    sunday: {
        day: {
            start: 'Off',
            end: 'Off'
        },
        night: {
            start: 'Off',
            end: 'Off'
        },
    },
}


const tractorNums = [363, 364, 365, 366, 367, 368, 369]

export {tractors, planningOptions, tractorNums, fakeWeek}