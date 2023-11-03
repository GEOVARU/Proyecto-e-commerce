
import React from 'react';
import "./footer.css";
import "./footer.sass";

const footer = () => {
    return (
        <>
            <div class="footer-basic">
                <footer>
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <a href="#">
                                <strong>9490-20-427</strong><br />
                                Alfredo Geovanni Ramirez Tzunun<br />
                                <a href="mailto:aramirezt7@miumg.edu.gt">aramirezt7@miumg.edu.gt</a>
                            </a>
                        </li>

                        <li class="list-inline-item">
                            <a href="#">
                                <strong>9490-20-387</strong><br />
                                Rudy Alexander Amado Soto Rosil<br />
                                <a href="mailto:rsotor2@miumg.edu.gt">rsotor2@miumg.edu.gt</a>
                            </a>
                        </li>
                    </ul>

                    <p class="copyright">Desarrollo Web Sección "A"</p>
                </footer>
            </div>

        </>
    );
}

export default footer