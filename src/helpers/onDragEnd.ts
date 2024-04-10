// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onDragEnd = (result: any, columns: any, setColumns: any) => {
	// If there is no destination, do nothing
	if (!result.destination) return;

	// Destructure source and destination from the result
	const { source, destination } = result;

	// If the source and destination columns are different
	if (source.droppableId !== destination.droppableId) {
		// Get the source and destination columns and their items
		const sourceColumn = columns[source.droppableId];
		const destColumn = columns[destination.droppableId];
		const sourceItems = [...sourceColumn.items];
		const destItems = [...destColumn.items];
		
		// Remove the item from the source column and insert it into the destination column
		const [removed] = sourceItems.splice(source.index, 1);
		destItems.splice(destination.index, 0, removed);
		
		// Update the columns state with the new items arrays
		setColumns({
			...columns,
			[source.droppableId]: {
				...sourceColumn,
				items: sourceItems,
			},
			[destination.droppableId]: {
				...destColumn,
				items: destItems,
			},
		});
	} else {
		// If the source and destination columns are the same
		const column = columns[source.droppableId];
		const copiedItems = [...column.items];
		
		// Remove the item from its current position and insert it into the new position
		const [removed] = copiedItems.splice(source.index, 1);
		copiedItems.splice(destination.index, 0, removed);
		
		// Update the columns state with the new items array for the column
		setColumns({
			...columns,
			[source.droppableId]: {
				...column,
				items: copiedItems,
			},
		});
	}
};
