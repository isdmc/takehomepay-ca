 export default {
    '2025': {
        'Federal': {
            'basicPersonalAmount': 14538,
            'additionalBasicPersonalAmount': 1591,
            'canadaEmploymentCreditAmount': 1471,
            'CPP_QPP': {
                'creditRate': 0.15,
                'maxPensionableEarnings': 71300,
                'maxAdditionalPensionableEarnings': 81200,
                'baseContributionRate': 0.0495,
                'additionalContributionRate': 0.01,
                'CPP_QPP2ContributionRate': 0.04,
                'exemptionAmount': 3500
            },
            'ei': {
                'creditRate': 0.15,
                'maxInsurableEarnings': 65700,
                'contributionRate': 0.0164
            },
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 57375,
                    'rate': 0.15
                },
                {
                    'rangeMin': 57375,
                    'rangeMax': 114750,
                    'rate': 0.205
                },
                {
                    'rangeMin': 114750,
                    'rangeMax': 177882,
                    'rate': 0.26
                },
                {
                    'rangeMin': 177882,
                    'rangeMax': 253414,
                    'rate': 0.29
                },
                {
                    'rangeMin': 253414,
                    'rangeMax': Infinity,
                    'rate': 0.33
                }
            ]
        },
        'Newfoundland and Labrador': {
            'basicPersonalAmount': 11067,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 44192,
                    'rate': 0.087
                },
                {
                    'rangeMin': 44192,
                    'rangeMax': 88382,
                    'rate': 0.145
                },
                {
                    'rangeMin': 88382,
                    'rangeMax': 157792,
                    'rate': 0.158
                },
                {
                    'rangeMin': 157792,
                    'rangeMax': 220910,
                    'rate': 0.178
                },
                {
                    'rangeMin': 220910,
                    'rangeMax': 282214,
                    'rate': 0.198
                },
                {
                    'rangeMin': 282214,
                    'rangeMax': 564429,
                    'rate': 0.208
                },
                {
                    'rangeMin': 564429,
                    'rangeMax': 1128858,
                    'rate': 0.213
                },
                {
                    'rangeMin': 1128858,
                    'rangeMax': Infinity,
                    'rate': 0.218
                },
            ]
        },
        'Prince Edward Island': {
            'basicPersonalAmount': 14250,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 33328,
                    'rate': 0.0965
                },
                {
                    'rangeMin': 33328,
                    'rangeMax': 64656,
                    'rate': 0.1347
                },
                {
                    'rangeMin': 64656,
                    'rangeMax': 105000,
                    'rate': 0.1660
                },
                {
                    'rangeMin': 105000,
                    'rangeMax': 140000,
                    'rate': 0.1762
                },
                {
                    'rangeMin': 140000,
                    'rangeMax': Infinity,
                    'rate': 0.19
                }
            ]
        },
        'Nova Scotia': {
            'basicPersonalAmount': 8744,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 30507,
                    'rate': 0.0879
                },
                {
                    'rangeMin': 30507,
                    'rangeMax': 61015,
                    'rate': 0.1495
                },
                {
                    'rangeMin': 61015,
                    'rangeMax': 95883,
                    'rate': 0.1667
                },
                {
                    'rangeMin': 95883,
                    'rangeMax': 154650,
                    'rate': 0.175
                },
                {
                    'rangeMin': 154650,
                    'rangeMax': Infinity,
                    'rate': 0.21
                },
            ]
        },
        'Quebec': {
            'basicPersonalAmount': 18571,
            'CPP_QPP': {
                'creditRate': 0.15,
                'maxPensionableEarnings': 71300,
                'maxAdditionalPensionableEarnings': 81200,
                'baseContributionRate': 0.054,
                'additionalContributionRate': 0.01,
                'CPP_QPP2ContributionRate': 0.04,
                'exemptionAmount': 3500
            },
            'ei': {
                'creditRate': 0.15,
                'maxInsurableEarnings': 65700,
                'contributionRate': 0.0164
            },
            'qpip': {
                'creditRate': 0.15,
                'maxInsurableEarnings': 98000,
                'contributionRate': 0.00494
            },
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 53255,
                    'rate': 0.14
                },
                {
                    'rangeMin': 53255,
                    'rangeMax': 106495,
                    'rate': 0.19
                },
                {
                    'rangeMin': 106495,
                    'rangeMax': 129590,
                    'rate': 0.24
                },
                {
                    'rangeMin': 129590,
                    'rangeMax': Infinity,
                    'rate': 0.2575
                }
            ]
        },
        'Ontario': {
            'basicPersonalAmount': 12747,
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
                    'rate': 0.25
                }
            ],
            'surtaxBrackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 5710,
                    'rate': 0
                },
                {
                    'rangeMin': 5710,
                    'rangeMax': 7307,
                    'rate': 0.2
                },
                {
                    'rangeMin': 7307,
                    'rangeMax': Infinity,
                    'rate': 0.36
                }
            ],
            'brackets':
            [   
                {
                    'rangeMin': 0,
                    'rangeMax': 52886,
                    'rate': 0.0505
                },
                {
                    'rangeMin': 52886,
                    'rangeMax': 105775,
                    'rate': 0.0915
                },
                {
                    'rangeMin': 105775,
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
            'basicPersonalAmount': 15969,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 47564,
                    'rate': 0.108
                },
                {
                    'rangeMin': 47564,
                    'rangeMax': 101200,
                    'rate': 0.1275
                },
                {
                    'rangeMin': 101200,
                    'rangeMax': Infinity,
                    'rate': 0.174
                }
            ]
        },
        'Saskatchewan': {
            'basicPersonalAmount': 18991,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 53463,
                    'rate': 0.105
                },
                {
                    'rangeMin': 53463,
                    'rangeMax': 152750,
                    'rate': 0.125
                },
                {
                    'rangeMin': 152750,
                    'rangeMax': Infinity,
                    'rate': 0.145
                }
            ]
        },
        'Alberta': {
            'basicPersonalAmount': 22323,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 151234,
                    'rate': 0.1
                },
                {
                    'rangeMin': 151234,
                    'rangeMax': 181481,
                    'rate': 0.12
                },
                {
                    'rangeMin': 181481,
                    'rangeMax': 241974,
                    'rate': 0.13
                },
                {
                    'rangeMin': 241974,
                    'rangeMax': 362961,
                    'rate': 0.14
                },
                {
                    'rangeMin': 362961,
                    'rangeMax': Infinity,
                    'rate': 0.15
                },
            ]
        },
        'British Columbia': {
            'basicPersonalAmount': 12932,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 49279,
                    'rate': 0.0506
                },
                {
                    'rangeMin': 49279,
                    'rangeMax': 98560,
                    'rate': 0.077
                },
                {
                    'rangeMin': 98560,
                    'rangeMax': 113158,
                    'rate': 0.105
                },
                {
                    'rangeMin': 113158,
                    'rangeMax': 137407,
                    'rate': 0.1229
                },
                {
                    'rangeMin': 137407,
                    'rangeMax': 186306,
                    'rate': 0.147
                },
                {
                    'rangeMin': 186306,
                    'rangeMax': 259829,
                    'rate': 0.168
                },
                {
                    'rangeMin': 259829,
                    'rangeMax': Infinity,
                    'rate': 0.205
                }
            ]
        },
        'Yukon': {
            'basicPersonalAmount': 14538,
            'additionalBasicPersonalAmount': 1591,
            'canadaEmploymentCreditAmount': 1471,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 57375,
                    'rate': 0.064
                },
                {
                    'rangeMin': 57375,
                    'rangeMax': 114750,
                    'rate': 0.09
                },
                {
                    'rangeMin': 114750,
                    'rangeMax': 177882,
                    'rate': 0.109
                },
                {
                    'rangeMin': 177882,
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
            'basicPersonalAmount': 17842,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 51964,
                    'rate': 0.059
                },
                {
                    'rangeMin': 51964,
                    'rangeMax': 103930,
                    'rate': 0.086
                },
                {
                    'rangeMin': 103930,
                    'rangeMax': 168967,
                    'rate': 0.122
                },
                {
                    'rangeMin': 168967,
                    'rangeMax': Infinity,
                    'rate': 0.1405
                }
            ]
        },
        'Nunavut': {
            'basicPersonalAmount': 19274,
            'brackets': [
                {
                    'rangeMin': 0,
                    'rangeMax': 54707,
                    'rate': 0.04
                },
                {
                    'rangeMin': 54707,
                    'rangeMax': 109413,
                    'rate': 0.07
                },
                {
                    'rangeMin': 109413,
                    'rangeMax': 177881,
                    'rate': 0.09
                },
                {
                    'rangeMin': 177881,
                    'rangeMax': Infinity,
                    'rate': 0.115
                }
            ]
        }
    },
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
                    'rate': 0.25
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
    }
}