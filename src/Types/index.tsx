// Define the shape of a single task
export type TaskT = {
	id: string; // Unique identifier for the task
	title: string; // Title of the task
	description: string; // Description of the task
	priority: string; // Priority level of the task
	deadline: number; // Deadline of the task in minutes
	image?: string; // Optional image URL for the task
	alt?: string; // Optional alt text for the image
	tags: { title: string; bg: string; text: string }[]; // Array of tags associated with the task
};

// Define the shape of a column containing tasks
type Column = {
	name: string; // Name of the column
	items: TaskT[]; // Array of tasks in the column
};

// Define the shape of the entire board with multiple columns
export type Columns = {
	[key: string]: Column; // Object with column names as keys and column objects as values
};
