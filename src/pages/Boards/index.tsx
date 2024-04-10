import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import { Board } from "../../data/board";
import { Columns } from "../../Types";
// Import function to handle drag and drop events
import { onDragEnd } from "../../helpers/onDragEnd";
import { AddOutline } from "react-ionicons";
import AddModal from "../../components/Modals/AddModal";
import Task from "../../components/Task";

// Define the Home component
const Home = () => {
	// State to manage columns of the board, modal open state, and selected column
	const [columns, setColumns] = useState<Columns>(Board);
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedColumn, setSelectedColumn] = useState("");

	// Function to open the add task modal and set the selected column
	const openModal = (columnId: any) => {
		setSelectedColumn(columnId);
		setModalOpen(true);
	};

	// Function to close the add task modal
	const closeModal = () => {
		setModalOpen(false);
	};

	// Function to handle adding a new task to a column
	const handleAddTask = (taskData: any) => {
		// Create a new copy of the board object
		const newBoard = { ...columns };
		// Push the new task data to the selected column
		newBoard[selectedColumn].items.push(taskData);
	};

	return (
		<>
			{/* DragDropContext to wrap the draggable components */}
			<DragDropContext onDragEnd={(result: any) => onDragEnd(result, columns, setColumns)}>
				{/* Render columns of the board */}
				<div className="flex items-start justify-between w-full gap-10 px-5 pb-8 md:gap-0">
					{/* Map over each column in the board */}
					{Object.entries(columns).map(([columnId, column]: any) => (
						<div
							className="flex flex-col w-full gap-0"
							key={columnId}
						>
							{/* Droppable component for each column */}
							<Droppable
								droppableId={columnId}
								key={columnId}
							>
								{(provided: any) => (
									<div
										ref={provided.innerRef}
										{...provided.droppableProps}
										className="flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-5"
									>
										<div className="flex items-center justify-center py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]">
											{column.name}
										</div>
										{/* Map over tasks in the column */}
										{column.items.map((task: any, index: any) => (
											<Draggable
												key={task.id.toString()}
												draggableId={task.id.toString()}
												index={index}
											>
												{(provided: any) => (
													<>
														<Task
															provided={provided}
															task={task}
														/>
													</>
												)}
											</Draggable>
										))}
										{provided.placeholder}
									</div>
								)}
							</Droppable>
							<div
								onClick={() => openModal(columnId)}
								className="flex cursor-pointer items-center justify-center gap-1 py-[10px] md:w-[90%] w-full opacity-90 bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]"
							>
								<AddOutline color={"#555"} />
								Add Task
							</div>
						</div>
					))}
				</div>
			</DragDropContext>

			{/* AddModal component for adding tasks */}
			<AddModal
				isOpen={modalOpen}
				onClose={closeModal}
				setOpen={setModalOpen}
				handleAddTask={handleAddTask}
			/>
		</>
	);
};

// Export the Home component as the default export
export default Home;
