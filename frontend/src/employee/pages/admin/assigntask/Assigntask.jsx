import React from "react";
import "./Assigntask.scss";

const Assigntask = () => {
	const assignedTask = [
		{
			status: "Pending",
			employeeId: "123",
			taskId: "234",
			empName: "Raju",
		},
	];
	return (
		<section>
			{assignedTask.map((item, ind) => (
				<section key={ind} className="assign-task">
					<h3>
						Employee Name: <span>{item?.empName}</span>
					</h3>
					<h3>
						Status: <span>{item?.status}</span>
					</h3>
					<h3>
						Task Id: <span>{item?.taskId}</span>
					</h3>
					<h3>
						Employee Id: <span>{item?.employeeId}</span>
					</h3>
				</section>
			))}
		</section>
	);
};

export default Assigntask;
