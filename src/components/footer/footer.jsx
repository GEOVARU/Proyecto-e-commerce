
import React from 'react';
import "./footer.css";
import "./footer.sass";

const footer = () => {
    return (
        <>
            <div class="footer-basic">
                <footer>
                    <div class="footer-content">
                        <div class="footer-column">
                            <strong>9490-20-427</strong><br />
                            Alfredo Geovanni Ramirez Tzunun<br />
                            <a href="mailto:aramirezt7@miumg.edu.gt">aramirezt7@miumg.edu.gt</a>
                        </div>

                        <div class="footer-column">
                            <strong>9490-20-387</strong><br />
                            Rudy Alexander Amado Soto Rosil<br />
                            <a href="mailto:rsotor2@miumg.edu.gt">rsotor2@miumg.edu.gt</a>
                        </div>
                    </div>
                    <p class="copyright">Desarrollo Web, 8vo Semestre UMG</p>
                </footer>
            </div>


        </>
    );
}

export default footer