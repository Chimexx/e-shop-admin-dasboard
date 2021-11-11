import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../RequestMethods";

export default function Product() {
	const location = useLocation();
	const [stats, setStats] = useState([]);
	const productId = location.pathname.split("/")[2];
	const product = useSelector((state) => state.products.products.find((item) => item._id === productId));
	console.log(product);

	const MONTHS = useMemo(() => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], []);

	useEffect(() => {
		const getStats = async () => {
			try {
				const res = await userRequest.get("/orders/income?pid=" + productId);
				const list = res.data.sort((a, b) => a._id - b._id);
				console.log(list);
				list.map((item) => setStats((prev) => [...prev, { name: MONTHS[item._id - 1], Sales: item.total }]));
			} catch (error) {
				console.log(error);
			}
		};
		getStats();
	}, [MONTHS, productId]);
	console.log(stats);
	return (
		<div className="product">
			<div className="productTitleContainer">
				<h1 className="productTitle">Product</h1>
				<Link to="/newproduct">
					<button className="productAddButton">Create</button>
				</Link>
			</div>
			<div className="productTop">
				<div className="productTopLeft">
					<Chart data={stats} dataKey="Sales" title="Sales Performance" />
				</div>
				<div className="productTopRight">
					<div className="productInfoTop">
						<img src={product.img} alt="" className="productInfoImg" />
						<span className="productName">{product.title}</span>
					</div>
					<div className="productInfoBottom">
						<div className="productInfoItem">
							<span className="productInfoKey">id:</span>
							<span className="productInfoValue"> {productId}</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">sales:</span>
							<span className="productInfoValue">5123</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">active:</span>
							<span className="productInfoValue">yes</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">in stock:</span>
							<span className="productInfoValue"> {product.inStock ? "Yes" : "No"}</span>
						</div>
					</div>
				</div>
			</div>
			<div className="productBottom">
				<form className="productForm">
					<div className="productFormLeft">
						<label>Product Name</label>
						<input type="text" placeholder={product.title} />
						<label>Description</label>
						<input type="text" placeholder={product.desc} />
						<label>Price</label>
						<input type="text" placeholder={product.price} />
						<label>In Stock</label>
						<select name="inStock" id="idStock">
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
						<label>Active</label>
						<select name="active" id="active">
							<option value="true">Yes</option>
							<option value="false">No</option>
						</select>
					</div>
					<div className="productFormRight">
						<div className="productUpload">
							<img src={product.img} alt="" className="productUploadImg" />
							<label for="file">
								<Publish />
							</label>
							<input type="file" id="file" style={{ display: "none" }} />
						</div>
						<button className="productButton">Update</button>
					</div>
				</form>
			</div>
		</div>
	);
}
