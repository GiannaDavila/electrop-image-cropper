import { Link } from "react-router-dom"
export default function Hello () {
        return (
            <div>
              <div className="Hello">
                <h1>My Photo Cropper</h1>
              </div>
              <div className="Hello">
                <Link
                  href="https://electron-react-boilerplate.js.org/">
                  <button type="button">
                    <span role="img" aria-label="camara"/>
                      📷 &nbsp;
                    Crop Photo
                  </button>
                </Link>
              </div>
            </div>
        
    )
}