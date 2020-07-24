const nav = document.querySelector("nav");
const header = document.querySelector("header");
const headeroptions = {};
const headerobserver = 
        new IntersectionObserver(
            function(entries ,headerobserver)
            {
                entries.forEach(entry =>
                {
                    if (!entry.isIntersecting)
                    {
                        nav.classList.add("nav__list");
                    }
                    else
                    {
                        nav.classList.remove("nav__list");
                    }
                })
            },
            headeroptions); 
headerobserver.observe(header);