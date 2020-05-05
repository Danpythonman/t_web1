/** Gets a quote and the author using an API */

async function loadData()
{
    /** Gets and displays the quote */

    let api_response = await fetch("https://quotes.rest/qod?category=inspire");
    let api_data = await api_response.json();

    let quote_o = api_data.contents.quotes[0]

    document.getElementById("quote").innerHTML = quote_o.quote;
    document.getElementById("author").innerHTML = quote_o.author;
}
