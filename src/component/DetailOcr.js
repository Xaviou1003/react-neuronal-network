import React from 'react';


const DetailOcr = () => (
    <div>
        <h4>La reconnaissance de caractère (= ocr)</h4>
        <div>
            <p>
              Ce type de réseau de neurone propose de reconnaitre 3 caractères: A, B et C.<br />
              Ces caractères doivent être écrit sous la forme suivante:
            </p>
            <div className="horizontal-layout">
              <div className="letter-presentation space-box">
              .#####.<br/>
              #.....#<br/>
              #.....#<br/>
              #######<br/>
              #.....#<br/>
              #.....#<br/>
              #.....#<br/>
              </div>
              <div className="letter-presentation space-box">
              ######.<br/>
              #.....#<br/>
              #.....#<br/>
              ######.<br/>
              #.....#<br/>
              #.....#<br/>
              ######.<br/>
              </div>
              <div className="letter-presentation space-box">
              #######<br/>
              #......<br/>
              #......<br/>
              #......<br/>
              #......<br/>
              #......<br/>
              #######<br/>
              </div>
            </div>
        </div>
    </div>
);

export default DetailOcr;