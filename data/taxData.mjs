 export default {
    '2024': {
        'Federal': {
            'basicPersonalAmount': 14156,
            'additionalBasicPersonalAmount': 1549,
            'canadaEmploymentCreditAmount': 1433,
            'CPP_QPP': {
                'creditRate': 0.15,
                'maxPensionableEarnings': 68500,
                'maxAdditionalPensionableEarnings': 73200,
                'baseContributionRate': 0.0495,
                'additionalContributionRate': 0.01,
                'CPP_QPP2ContributionRate': 0.04,
                'exemptionAmount': 3500
            },
            'ei': {
                'creditRate': 0.15,
                'maxInsurableEarnings': 63200,
                'contributionRate': 0.0166
            },
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 55867,
                    'rate': 0.15
                },
                {
                    'rangeMin': 55867,
                    'rangeMax': 111733,
                    'rate': 0.205
                },
                {
                    'rangeMin': 111733,
                    'rangeMax': 173205,
                    'rate': 0.26
                },
                {
                    'rangeMin': 173205,
                    'rangeMax': 246752,
                    'rate': 0.29
                },
                {
                    'rangeMin': 246752,
                    'rangeMax': Infinity,
                    'rate': 0.33
                }
            ]
        },        
        'Newfoundland and Labrador': {
            'basicPersonalAmount': 10818,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 43198,
                    'rate': 0.087
                },
                {
                    'rangeMin': 43198,
                    'rangeMax': 86395,
                    'rate': 0.145
                },
                {
                    'rangeMin': 86395,
                    'rangeMax': 154244,
                    'rate': 0.158
                },
                {
                    'rangeMin': 154244,
                    'rangeMax': 215943,
                    'rate': 0.178
                },
                {
                    'rangeMin': 215943,
                    'rangeMax': 275870,
                    'rate': 0.198
                },
                {
                    'rangeMin': 275870,
                    'rangeMax': 551739,
                    'rate': 0.208
                },
                {
                    'rangeMin': 551739,
                    'rangeMax': 1103478,
                    'rate': 0.213
                },
                {
                    'rangeMin': 1103478,
                    'rangeMax': Infinity,
                    'rate': 0.218
                },
            ]
        },
        'Prince Edward Island': {
            'basicPersonalAmount': 13500,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 32656,
                    'rate': 0.0965
                },
                {
                    'rangeMin': 32656,
                    'rangeMax': 64313,
                    'rate': 0.1363
                },
                {
                    'rangeMin': 64313,
                    'rangeMax': 105000,
                    'rate': 0.1665
                },
                {
                    'rangeMin': 105000,
                    'rangeMax': 140000,
                    'rate': 0.18
                },
                {
                    'rangeMin': 140000,
                    'rangeMax': Infinity,
                    'rate': 0.1875
                }
            ]
        },
        'Nova Scotia': {
            'basicPersonalAmount': 8481,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 29590,
                    'rate': 0.0879
                },
                {
                    'rangeMin': 29590,
                    'rangeMax': 59180,
                    'rate': 0.1495
                },
                {
                    'rangeMin': 59180,
                    'rangeMax': 93000,
                    'rate': 0.1667
                },
                {
                    'rangeMin': 93000,
                    'rangeMax': 150000,
                    'rate': 0.175
                },
                {
                    'rangeMin': 150000,
                    'rangeMax': Infinity,
                    'rate': 0.21
                },
            ]
        },
        'New Brunswick': {
            'basicPersonalAmount': 13044,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 49958,
                    'rate': 0.094
                },
                {
                    'rangeMin': 49958,
                    'rangeMax': 99916,
                    'rate': 0.14
                },
                {
                    'rangeMin': 99916,
                    'rangeMax': 185064,
                    'rate': 0.16
                },
                {
                    'rangeMin': 185064,
                    'rangeMax': Infinity,
                    'rate': 0.195
                }
            ]
        },
        'Quebec': {
            'basicPersonalAmount': 18056,
            'CPP_QPP': {
                'creditRate': 0.15,
                'maxPensionableEarnings': 68500,
                'maxAdditionalPensionableEarnings': 73200,
                'baseContributionRate': 0.054,
                'additionalContributionRate': 0.01,
                'CPP_QPP2ContributionRate': 0.04,
                'exemptionAmount': 3500
            },
            'ei': {
                'creditRate': 0.15,
                'maxInsurableEarnings': 63200,
                'contributionRate': 0.0132
            },
            'qpip': {
                'creditRate': 0.15,
                'maxInsurableEarnings': 94000,
                'contributionRate': 0.00494
            },
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 51780,
                    'rate': 0.14
                },
                {
                    'rangeMin': 51780,
                    'rangeMax': 103545,
                    'rate': 0.19
                },
                {
                    'rangeMin': 103545,
                    'rangeMax': 126000,
                    'rate': 0.24
                },
                {
                    'rangeMin': 126000,
                    'rangeMax': Infinity,
                    'rate': 0.2575
                }
            ]
        },
        'Ontario': {
            'basicPersonalAmount': 12399,
            'healthPremiumBrackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 20000,
                    'baseAmount': 0,
                    'previousBaseAmount': 0,
                    'rate': 0
                },
                {
                    'rangeMin': 20000,
                    'rangeMax': 36000,
                    'baseAmount': 300,
                    'previousBaseAmount': 0,
                    'rate': 0.06
                },
                {
                    'rangeMin': 36000,
                    'rangeMax': 48000,
                    'baseAmount': 450,
                    'previousBaseAmount': 300,
                    'rate': 0.06
                },
                {
                    'rangeMin': 48000,
                    'rangeMax': 72000,
                    'baseAmount': 600,
                    'previousBaseAmount': 450,
                    'rate': 0.25
                },
                {
                    'rangeMin': 72000,
                    'rangeMax': 200000,
                    'baseAmount': 750,
                    'previousBaseAmount': 600,
                    'rate': 0.25
                },
                {
                    'rangeMin': 200000,
                    'rangeMax': Infinity,
                    'baseAmount': 900,
                    'previousBaseAmount': 750,
                    'rate': 0.06
                }
            ],
            'surtaxBrackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 5554,
                    'rate': 0
                },
                {
                    'rangeMin': 5554,
                    'rangeMax': 7108,
                    'rate': 0.2
                },
                {
                    'rangeMin': 7108,
                    'rangeMax': Infinity,
                    'rate': 0.36
                }
            ],
            'brackets':
            [   
                {
                    'rangeMin': 0,
                    'rangeMax': 51446,
                    'rate': 0.0505
                },
                {
                    'rangeMin': 51446,
                    'rangeMax': 102894,
                    'rate': 0.0915
                },
                {
                    'rangeMin': 102894,
                    'rangeMax': 150000,
                    'rate': 0.1116
                },
                {
                    'rangeMin': 150000,
                    'rangeMax': 220000,
                    'rate': 0.1216
                },
                {
                    'rangeMin': 220000,
                    'rangeMax': Infinity,
                    'rate': 0.1316
                }
            ]    
        },
        'Manitoba': {
            'basicPersonalAmount': 15780,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 47000,
                    'rate': 0.108
                },
                {
                    'rangeMin': 47000,
                    'rangeMax': 100000,
                    'rate': 0.1275
                },
                {
                    'rangeMin': 100000,
                    'rangeMax': Infinity,
                    'rate': 0.174
                }
            ]
        },
        'Saskatchewan': {
            'basicPersonalAmount': 18491,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 52057,
                    'rate': 0.105
                },
                {
                    'rangeMin': 52057,
                    'rangeMax': 148734,
                    'rate': 0.125
                },
                {
                    'rangeMin': 148734,
                    'rangeMax': Infinity,
                    'rate': 0.145
                }
            ]
        },
        'Alberta': {
            'basicPersonalAmount': 21885,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 148269,
                    'rate': 0.1
                },
                {
                    'rangeMin': 148269,
                    'rangeMax': 177922,
                    'rate': 0.12
                },
                {
                    'rangeMin': 177922,
                    'rangeMax': 237230,
                    'rate': 0.13
                },
                {
                    'rangeMin': 237230,
                    'rangeMax': 355845,
                    'rate': 0.14
                },
                {
                    'rangeMin': 355845,
                    'rangeMax': Infinity,
                    'rate': 0.15
                },
            ]
        },
        'British Columbia': {
            'basicPersonalAmount': 12580,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 47937,
                    'rate': 0.0506
                },
                {
                    'rangeMin': 47937,
                    'rangeMax': 95875,
                    'rate': 0.077
                },
                {
                    'rangeMin': 95875,
                    'rangeMax': 110076,
                    'rate': 0.105
                },
                {
                    'rangeMin': 110076,
                    'rangeMax': 133664,
                    'rate': 0.1229
                },
                {
                    'rangeMin': 133664,
                    'rangeMax': 181232,
                    'rate': 0.147
                },
                {
                    'rangeMin': 181232,
                    'rangeMax': 252752,
                    'rate': 0.168
                },
                {
                    'rangeMin': 252752,
                    'rangeMax': Infinity,
                    'rate': 0.205
                }
            ]
        },
        'Yukon': {
            'basicPersonalAmount': 14156,
            'additionalBasicPersonalAmount': 1549,
            'canadaEmploymentCreditAmount': 1433,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 55867,
                    'rate': 0.064
                },
                {
                    'rangeMin': 55867,
                    'rangeMax': 111733,
                    'rate': 0.09
                },
                {
                    'rangeMin': 111733,
                    'rangeMax': 173205,
                    'rate': 0.109
                },
                {
                    'rangeMin': 173205,
                    'rangeMax': 500000,
                    'rate': 0.128
                },
                {
                    'rangeMin': 500000,
                    'rangeMax': Infinity,
                    'rate': 0.15
                }
            ]
        },
        'Northwest Territories': {
            'basicPersonalAmount': 17373,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 50597,
                    'rate': 0.059
                },
                {
                    'rangeMin': 50597,
                    'rangeMax': 101198,
                    'rate': 0.086
                },
                {
                    'rangeMin': 101198,
                    'rangeMax': 164525,
                    'rate': 0.122
                },
                {
                    'rangeMin': 164525,
                    'rangeMax': Infinity,
                    'rate': 0.1405
                }
            ]
        },
        'Nunavut': {
            'basicPersonalAmount': 18767,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 53268,
                    'rate': 0.04
                },
                {
                    'rangeMin': 53268,
                    'rangeMax': 106537,
                    'rate': 0.07
                },
                {
                    'rangeMin': 106537,
                    'rangeMax': 173205,
                    'rate': 0.09
                },
                {
                    'rangeMin': 173205,
                    'rangeMax': Infinity,
                    'rate': 0.115
                }
            ]
        }
    },
    '2023': {
        'Federal': {
            'basicPersonalAmount': 13521,
            'additionalBasicPersonalAmount': 1479,
            'cppContributionRate': 0.0595,
            'maxPensionableEarnings': 66600,
            'eiContributionRate': 0.0163,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 53359,
                    'rate': 0.15
                },
                {
                    'rangeMin': 53359,
                    'rangeMax': 106717,
                    'rate': 0.205
                },
                {
                    'rangeMin': 106717,
                    'rangeMax': 165430,
                    'rate': 0.26
                },
                {
                    'rangeMin': 165430,
                    'rangeMax': 235675,
                    'rate': 0.29
                },
                {
                    'rangeMin': 235675,
                    'rangeMax': Infinity,
                    'rate': 0.33
                }
            ]
        },
        'Newfoundland and Labrador': {
            'basicPersonalAmount': 10382,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 41457,
                    'rate': 0.087
                },
                {
                    'rangeMin': 41457,
                    'rangeMax': 82913,
                    'rate': 0.145
                },
                {
                    'rangeMin': 82913,
                    'rangeMax': 148027,
                    'rate': 0.158
                },
                {
                    'rangeMin': 148027,
                    'rangeMax': 207239,
                    'rate': 0.178
                },
                {
                    'rangeMin': 207239,
                    'rangeMax': 264750,
                    'rate': 0.198
                },
                {
                    'rangeMin': 264750,
                    'rangeMax': 529500,
                    'rate': 0.208
                },
                {
                    'rangeMin': 529500,
                    'rangeMax': 1059000,
                    'rate': 0.213
                },
                {
                    'rangeMin': 1059000,
                    'rangeMax': Infinity,
                    'rate': 0.218
                },
            ]
        },
        'Prince Edward Island': {
            'basicPersonalAmount': 12750,
            'brackets': 
            [
                {
                    'rangeMin': 0,
                    'rangeMax': 31984,
                    'rate': 0.098
                },
                {
                    'rangeMin': 31984,
                    'rangeMax': 63969,
                    'rate': 0.138
                },
                {
                    'rangeMin': 63969,
                    'rangeMax': Infinity,
                    'rate': 0.167
                },
            ]
        },
        'Nova Scotia': {
            'basicPersonalAmount': 8481,
            'brackets': 
            [
                {
                    'rangeMin': 0,
                    'rangeMax': 29590,
                    'rate': 0.0879
                },
                {
                    'rangeMin': 29590,
                    'rangeMax': 59180,
                    'rate': 0.1495
                },
                {
                    'rangeMin': 59180,
                    'rangeMax': 93000,
                    'rate': 0.1667
                },
                {
                    'rangeMin': 93000,
                    'rangeMax': 150000,
                    'rate': 0.175
                },
                {
                    'rangeMin': 150000,
                    'rangeMax': Infinity,
                    'rate': 0.21
                },
            ]
        },
        'New Brunswick': {
            'basicPersonalAmount': 12458,
            'brackets':
            [
                {
                    'rangeMin': 0,
                    'rangeMax': 47715,
                    'rate': 0.094
                },
                {
                    'rangeMin': 47715,
                    'rangeMax': 95431,
                    'rate': 0.14
                },
                {
                    'rangeMin': 95431,
                    'rangeMax': 176756,
                    'rate': 0.16
                },
                {
                    'rangeMin': 176756,
                    'rangeMax': Infinity,
                    'rate': 0.195
                }
            ]
        },
        'Quebec': {
            'basicPersonalAmount': 17183,
            'brackets': 
            [
                {
                    'rangeMin': 0,
                    'rangeMax': 49275,
                    'rate': 0.14
                },
                {
                    'rangeMin': 49275,
                    'rangeMax': 98540,
                    'rate': 0.19
                },
                {
                    'rangeMin': 98540,
                    'rangeMax': 119910,
                    'rate': 0.24
                },
                {
                    'rangeMin': 119910,
                    'rangeMax': Infinity,
                    'rate': 0.2575
                },
            ]
        },
        'Ontario': {
            'basicPersonalAmount': 11865,
            'brackets':
            [   
                {
                    'rangeMin': 0,
                    'rangeMax': 49231,
                    'rate': 0.0505
                },
                {
                    'rangeMin': 49231,
                    'rangeMax': 98463,
                    'rate': 0.0915
                },
                {
                    'rangeMin': 98463,
                    'rangeMax': 150000,
                    'rate': 0.1116
                },
                {
                    'rangeMin': 150000,
                    'rangeMax': 220000,
                    'rate': 0.1216
                },
                {
                    'rangeMin': 220000,
                    'rangeMax': Infinity,
                    'rate': 0.1316
                }
            ]    
        },
        'Manitoba': {
            'basicPersonalAmount': 15000,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 36842,
                    'rate': 0.1080
                },
                {
                    'rangeMin': 36842,
                    'rangeMax': 79625,
                    'rate': 0.1275
                },
                {
                    'rangeMin': 79625,
                    'rangeMax': Infinity,
                    'rate': 0.1740
                }
            ]
        },
        'Saskatchewan': {
            'basicPersonalAmount': 17661,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 49720,
                    'rate': 0.105
                },
                {
                    'rangeMin': 49720,
                    'rangeMax': 142058,
                    'rate': 0.125
                },
                {
                    'rangeMin': 142058,
                    'rangeMax': Infinity,
                    'rate': 0.145
                }
            ]
        },
        'Alberta': {
            'basicPersonalAmount': 21003,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 142292,
                    'rate': 0.1
                },
                {
                    'rangeMin': 142292,
                    'rangeMax': 170751,
                    'rate': 0.12
                },
                {
                    'rangeMin': 170751,
                    'rangeMax': 227668,
                    'rate': 0.13
                },
                {
                    'rangeMin': 227668,
                    'rangeMax': 341502,
                    'rate': 0.14
                },
                {
                    'rangeMin': 341502,
                    'rangeMax': Infinity,
                    'rate': 0.15
                },
            ]
        },
        'British Columbia': {
            'basicPersonalAmount': 11981,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 45654,
                    'rate': 0.0506
                },
                {
                    'rangeMin': 45654,
                    'rangeMax': 91310,
                    'rate': 0.077
                },
                {
                    'rangeMin': 91310,
                    'rangeMax': 104835,
                    'rate': 0.105
                },
                {
                    'rangeMin': 104835,
                    'rangeMax': 127299,
                    'rate': 0.1229
                },
                {
                    'rangeMin': 127299,
                    'rangeMax': 172602,
                    'rate': 0.147
                },
                {
                    'rangeMin': 172602,
                    'rangeMax': 240716,
                    'rate': 0.168
                },
                {
                    'rangeMin': 172602,
                    'rangeMax': Infinity,
                    'rate': 0.205
                }
            ]
        },
        'Yukon': {
            'basicPersonalAmount': 13521,
            'additionalBasicPersonalAmount': 1479,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 53359,
                    'rate': 0.064
                },
                {
                    'rangeMin': 53359,
                    'rangeMax': 106717,
                    'rate': 0.09
                },
                {
                    'rangeMin': 106717,
                    'rangeMax': 165430,
                    'rate': 0.109
                },
                {
                    'rangeMin': 165430,
                    'rangeMax': 235675,
                    'rate': 0.1293
                },
                {
                    'rangeMin': 235675,
                    'rangeMax': 500000,
                    'rate': 0.128
                },
                {
                    'rangeMin': 500000,
                    'rangeMax': Infinity,
                    'rate': 0.15
                }
            ]
        },
        'Northwest Territories': {
            'basicPersonalAmount': 16593,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 48326,
                    'rate': 0.059
                },
                {
                    'rangeMin': 48326,
                    'rangeMax': 96655,
                    'rate': 0.086
                },
                {
                    'rangeMin': 96655,
                    'rangeMax': 157139,
                    'rate': 0.122
                },
                {
                    'rangeMin': 157139,
                    'rangeMax': Infinity,
                    'rate': 0.1405
                }
            ]
        },
        'Nunavut': {
            'basicPersonalAmount': 16593,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 48326,
                    'rate': 0.059
                },
                {
                    'rangeMin': 48326,
                    'rangeMax': 96655,
                    'rate': 0.086
                },
                {
                    'rangeMin': 96655,
                    'rangeMax': 157139,
                    'rate': 0.122
                },
                {
                    'rangeMin': 157139,
                    'rangeMax': Infinity,
                    'rate': 0.1405
                },
            ]
        }
    }
}