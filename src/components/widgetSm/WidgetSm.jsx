import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../RequestMethods";

export default function WidgetSm() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			try {
				const res = await userRequest.get("/users?new=true");
				setUsers(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getUsers();
	}, []);

	return (
		<div className="widgetSm">
			<span className="widgetSmTitle">New Join Members</span>
			<ul className="widgetSmList">
				{users.map((user) => (
					<li key={user.id} className="widgetSmListItem">
						<img
							src={user.img || " https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"}
							alt=""
							className="widgetSmImg"
						/>
						<div className="widgetSmUser">
							<span className="widgetSmUsername">{user.username}</span>
							<span className="widgetSmUserTitle">Software Engineer</span>
						</div>
						<button className="widgetSmButton">
							<Visibility className="widgetSmIcon" />
							Display
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
