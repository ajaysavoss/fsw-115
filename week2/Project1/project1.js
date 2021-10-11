let characters = [
        {
            "id": 1,
            "amiiboSeries": "Super Smash Bros.",
            "character": "Mario",
            "gameSeries": "Super Mario",
            "head": "00000000",
            "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png",
            "name": "Mario",
            "release": {
                "au": "2014-11-29",
                "eu": "2014-11-28",
                "jp": "2014-12-06",
                "na": "2014-11-21"
            },
            "tail": "00000002",
            "type": "Figure"
        },
        {
            "id": 2,
            "amiiboSeries": "Super Smash Bros.",
            "character": "Luigi",
            "gameSeries": "Super Mario",
            "head": "00010000",
            "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00010000-000c0002.png",
            "name": "Luigi",
            "release": {
                "au": "2014-12-12",
                "eu": "2014-12-19",
                "jp": "2014-12-06",
                "na": "2014-12-14"
            },
            "tail": "000c0002",
            "type": "Figure"
        },
        {
            "id": 3,
            "amiiboSeries": "Super Smash Bros.",
            "character": "Peach",
            "gameSeries": "Super Mario",
            "head": "00020000",
            "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00020000-00010002.png",
            "name": "Peach",
            "release": {
                "au": "2014-11-29",
                "eu": "2014-11-28",
                "jp": "2014-12-06",
                "na": "2014-11-21"
            },
            "tail": "00010002",
            "type": "Figure"
        },
        {
            "id": 4,
            "amiiboSeries": "Super Smash Bros.",
            "character": "Yoshi",
            "gameSeries": "Super Mario",
            "head": "00030000",
            "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00030000-00020002.png",
            "name": "Yoshi",
            "release": {
                "au": "2014-11-29",
                "eu": "2014-11-28",
                "jp": "2014-12-06",
                "na": "2014-11-21"
            },
            "tail": "00020002",
            "type": "Figure"
        },
        {
            "id": 5,
            "amiiboSeries": "Super Mario Bros.",
            "character": "Rosalina",
            "gameSeries": "Super Mario",
            "head": "00040000",
            "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00040000-02620102.png",
            "name": "Rosalina",
            "release": {
                "au": "2016-10-08",
                "eu": "2016-10-07",
                "jp": "2016-10-20",
                "na": "2016-11-04"
            },
            "tail": "02620102",
            "type": "Figure"
        },
        {
            "id": 6,
            "amiiboSeries": "Super Smash Bros.",
            "character": "Bowser",
            "gameSeries": "Super Mario",
            "head": "00050000",
            "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00050000-00140002.png",
            "name": "Bowser",
            "release": {
                "au": "2015-01-29",
                "eu": "2015-01-23",
                "jp": "2015-01-22",
                "na": "2015-02-01"
            },
            "tail": "00140002",
            "type": "Figure"
        },
]

var characterList = document.getElementById("names")
for (var i = 0; i < characters.length; i++){
    characterList.innerHTML =+ "<li>" + characters[i].name + "</li>"
}