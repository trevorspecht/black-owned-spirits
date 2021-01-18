# black-owned-spirits

The map generated by this site shows Black-Owned spirits retailers in the U.S.A. It is based on a curated list located at [100+ Black-Owned Spirit Brands to Support](https://www.willdrinkfortravel.com/posts?category=Black-Owned%20Spirits), and also appears on that page (pending).

The map generated here is published with GitHub Pages at https://trevorspecht.github.io/black-owned-spirits/, and uses the [Mapbox Sheet Mapper](https://www.mapbox.com/impact-tools/sheet-mapper) and [Finder](https://www.mapbox.com/impact-tools/finder) tools.

This repository includes a Python web scraper script built using the BeautifulSoup parsing library. The script is customized for the particular format of the `100+ Black-Owned Spirit Brands to Support` page.

It parses out the following from the web page:
- retailer name
- web site URL
- location(s)
- description
