import { useState } from "react";
import "./newProduct.css";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import { createProducts } from "../../Redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewProduct() {
	const dispatch = useDispatch();
	const [inputs, setInputs] = useState({});
	const [file, setFile] = useState("");
	const [cat, setCat] = useState([]);
	const [colors, setColors] = useState([]);

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	const handleColors = (e) => {
		setColors(e.target.value.split(","));
	};

	const handleCat = (e) => {
		setCat(e.target.value.split(","));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const fileName = new Date().getTime() + file.name;
		const storage = getStorage(app);
		const storageRef = ref(storage, fileName);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {},
			(error) => {
				//on error
				console.log(error);
			},
			() => {
				//On complete
				getDownloadURL(uploadTask.snapshot.ref).then((url) => {
					const products = { ...inputs, img: url, cat: cat, colors: colors };
					console.log(products);
					createProducts(products, dispatch);
				});
			}
		);
	};
	return (
		<div className="newProduct">
			<h1 className="addProductTitle">New Product</h1>
			<form className="addProductForm">
				<div className="addProductItem">
					<label>Image</label>
					<input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
				</div>
				<div className="addProductItem">
					<label>Title</label>
					<input type="text" name="title" placeholder="Product name" onChange={handleChange} />
				</div>
				<div className="addProductItem">
					<label>Description</label>
					<input type="text" name="desc" placeholder="Product description" onChange={handleChange} />
				</div>
				<div className="addProductItem">
					<label>Category</label>
					<input type="text" placeholder="men, jeans, shirt, kids" onChange={handleCat} />
				</div>
				<div className="addProductItem">
					<label>Color</label>
					<input type="text" placeholder="red , green" onChange={handleColors} />
				</div>
				<div className="addProductItem">
					<label>Size</label>
					<input type="text" name="size" placeholder="XL, S, L, M" onChange={handleChange} />
				</div>
				<div className="addProductItem">
					<label>Price</label>
					<input type="number" name="price" placeholder="0" onChange={handleChange} />
				</div>
				<div className="addProductItem">
					<label>In Stock</label>
					<select name="inStock" id="active" onChange={handleChange}>
						<option value="true">Yes</option>
						<option value="false">No</option>
					</select>
				</div>
				<button className="addProductButton" onClick={handleSubmit}>
					Create
				</button>
			</form>
		</div>
	);
}
