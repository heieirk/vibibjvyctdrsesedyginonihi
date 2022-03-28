async function compileGs(app) {
    const res = await fetch('./apps.json');
    const json = await res.json();
    const arr = [];

    for (const entry of json) {
        arr.push(
            app.createElement('div', [], {
                class: 'gs-entry',
                style: {
                    background: `url(${entry.img})`,
                    'background-size': 'cover'
                },
                attrs: {
                    'data-title': entry.title
                },
                events: {
                    click(event) {
                        const frame = document.querySelector('iframe');
                        document.querySelector('main').style.display = 'none';
                        document.querySelector('header').style.display = 'none';
                        frame.style.display = 'block';
                        frame.src = (entry.location.startsWith('https://') || entry.location.startsWith('http://')) ? './load.html#' + encodeURIComponent(btoa(entry.location))
                        : entry.location;

                        document.querySelector('.access-panel').style.removeProperty('display');
                    }
                }
            })
        )
    };

    return arr;
};

export { apps };
