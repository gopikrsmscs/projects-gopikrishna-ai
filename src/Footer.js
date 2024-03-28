import React from 'react';

function Footer({ siteTitle, author }) {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="site-footer" className="border-dark border-left-0 border-right-0">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>&copy; {currentYear} {author ? <a href="/">{author}</a> : siteTitle}. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
