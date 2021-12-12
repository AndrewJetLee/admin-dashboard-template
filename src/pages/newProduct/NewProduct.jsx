import "./newProduct.scss"

const NewProduct = () => {
    const NewProductItem = ({ label, placeholder }) => {
        return (
          <div className="newProductItem">
            <label className="">{label}</label>
            <input type="text" placeholder={placeholder} className="newProductItemInput"/>
          </div>
        );
      };
    return (
        <div className="newProductContainer">
            <h2 className="newProductTitle">New Product</h2>
            <div className="newProductContent">
                <div className="newProductImageUpload">
                    <h4 className="newProductImageTitle">Image</h4>
                    <input type="file" className="newProductImageInput" />
                </div>
                <NewProductItem label="Name" placeholder="Apple Airpods"/>
                <NewProductItem label="Stock" placeholder="123"/>
                <div className="newProductItem">
                    <label for="active">Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>
            <button className="newProductButton">Create</button>
        </div>
    )
}

export default NewProduct
