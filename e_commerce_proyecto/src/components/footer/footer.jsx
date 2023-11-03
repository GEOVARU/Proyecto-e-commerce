
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
                    9490-20-427<br/>
                   Alfredo Geovanni Ramirez Tzunun<br/>
                   aramirezt7@miumg.edu.gt<br/>
                    </a>
                </li>

                <li class="list-inline-item">
                    <a href="#">
                    9490-20-387<br/>
                    Rudy Alexander Amado Soto Rosil<br/>
                    rsotor2@miumg.edu.gt<br/>
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