import React from 'react';

function Header({ siteTitle, headerPages }) {
    return (
        <header id="nav-header" className="border-dark border-left-0 border-right-0">
            <div id="nav-container" className="container position-relative d-flex justify-content-between align-items-center">
                <a className="h4 m-0" id="nav-site-title"  href="/">{siteTitle}</a>

                {headerPages && (
                    <nav id="nav-menu-container" className="text-right navbar-light">
                        <input type="checkbox" id="nav-trigger" className="d-none" />
                        <label htmlFor="nav-trigger" aria-label="button" className="m-2 d-inline-block d-lg-none navbar-toggler-icon"></label>

                        <div id="nav-menu" className="d-none d-lg-block">
                            {headerPages.map((page, index) => (
                                <a key={index} className="ml-3 ml-lg-0 p-2 d-block d-lg-inline-block" target="_blank" href={page.url_overwrite ? page.url_overwrite : page.url}>{page.title}</a>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;
