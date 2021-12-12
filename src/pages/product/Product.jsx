import "./product.scss";
import Chart from "../../components/Chart";
import { productData } from "../../dummyData";
import BackupIcon from '@mui/icons-material/Backup';
import { useNavigate } from "react-router-dom"

const Product = () => {

  const navigate = useNavigate();
  return (
    <div className="productContainer">
      <div className="productTitleWrapper">
        <h2 className="productTitle">Product</h2>
        <button className="productTitleCreate" onClick={() => navigate('/newProduct')}>Create</button>
      </div>
      <div className="productContent">
        <div className="productContentSales">
          <Chart
            data={productData}
            title="Sales Performance (last 3 months)"
            dataKey="Sales"
          />
        </div>
        <div className="productContentInfo">
          <div className="productContentInfoWrapper">
            <img
              className="productImage"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp4prQJjkxjNOKW8_-gL2YE_G7QogUJViifQ&usqp=CAU"
              alt=""
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoProperty">
            <span className="productInfoKey">id:</span>
            <span className="productInfoValue">123</span>
          </div>
          <div className="productInfoProperty">
            <span className="productInfoKey">sales:</span>
            <span className="productInfoValue">2321</span>
          </div>
          <div className="productInfoProperty">
            <span className="productInfoKey">active:</span>
            <span className="productInfoValue">yes</span>
          </div>
          <div className="productInfoProperty">
            <span className="productInfoKey">in stock:</span>
            <span className="productInfoValue">no</span>
          </div>
        </div>

        <div className="productContentUpdate">
            <div className="productContentUpdateLeft">
                <h3 className="productContentUpdateName">Product Name</h3>
                <input className="productContentUpdateInput" placeholder="Apple Airpods" type="text" />
                <div className="productContentUpdateDropdown">
                    <label for="stock">In stock</label>
                    <select name="stock" id="stock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productContentUpdateDropdown">
                    <label for="active">Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                
            </div>

            <div className="productContentUpdateRight">
                <div className="productContentUpdateUpload">
                    <img className="productContentUpdateUploadImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp4prQJjkxjNOKW8_-gL2YE_G7QogUJViifQ&usqp=CAU" alt="" />
                    <label for="file">
                        <BackupIcon className="productContentUpdateUploadIcon"/>
                    </label>
                    <input type="file" name="" id="file" style={{
                        display: "none"
                    }}/>
                    
                </div>
                <button className="productContentUpdateButton">Update</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
