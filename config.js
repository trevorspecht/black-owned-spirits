
const config = {
    style: "mapbox://styles/mapbox/dark-v10",
    accessToken: "pk.eyJ1IjoidHJldm9yc3BlY2h0IiwiYSI6ImNrYzJoM2t4ODAxNDAycnF0cHo5eHoybDcifQ.-Pw1y6ZbWuUMooRWmJAK1Q",
    CSV: "https://docs.google.com/spreadsheets/d/1BIqmPT06veFDmiBFL-80DtxIr44tVr8xoXUE2_x0TE0/edit?usp=sharing",
    center: [-133.7790381, 51.7079466], //Lng, Lat
    zoom: 4, //Default zoom
    title: "Black-owned Spirits",
    description: "Find spirits available by location",
    sideBarInfo: ["Name", "Address", "Website", "Phone"],
    popupInfo: ["Name", "Website"],
    filters: [
        {
            type: "dropdown",
            title: "Spirit Type",
            columnHeader: "Spirit Type",
            listItems: [
              'Vodka',
              'Bourbon/Whiskey',
              'Tequila',
              'Rum',
              'Gin',
              'Cognac',
              'Liqueur/Other',
              'Multiple Types'
            ]
        }
      /*  {
            type: "checkbox",
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: ["filter one", "filter two", "filter three"]
        },
        {
            type: "dropdown",
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: [
                'filter one',
                'filter two',
                'filter three',
                'filter four',
                'filter five',
                'filter six',
                'filter seven'
            ]
        }
        */
    ]

};
