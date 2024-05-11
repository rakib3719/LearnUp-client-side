import useTheme from "../../hook/useTheme";

const Faq = () => {

const {isDarkMode} = useTheme()

    return (
        <div  className="mt-8 font-raleway">
            <section className={`${!isDarkMode ? 'b' : 'bo rounded'} da0`}>
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 dark:text-gray-600">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How do I submit an assignment on this platform?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">To submit an assignment, you need to first create an account and log in. Once logged in, navigate to the "View Assignment"  section where you can upload your assignment file along with any additional details or instructions provided by your instructor. After submission, you will receive a confirmation message, and your assignment will be marked as pending until it is reviewed by the respective evaluator. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Can I see the details of my attempted assignments?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Yes, you can view detailed information about your attempted assignments in the "My Assignments" section. This includes the assignment title, submission date, marks awarded, feedback from evaluators, and any additional notes or instructions related to the assignment </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Can I update an assignment</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Yes, you can update assignments that are under your account. Navigate to the "My Assignments" section, find the assignment you wish to update, and click on the  "Update" option. Make the necessary changes to your assignment questions or details, and save the updates. You have full control over editing assignments, ensuring you can refine and improve them as needed for clarity or accuracy.

These revised FAQs are more general and applicable to any user on your platform regarding updating and deleting assignments under their account. Let me know if you need any further adjustments! </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Can I delete an assignment that I have created?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Yes, you can delete assignments that you have created. Navigate to the "My Assignments" section and find the assignment you want to delete. Look for the "Delete" or "Remove" option next to your assignment, and confirm the deletion when prompted. Please note that once an assignment is deleted, it cannot be recovered, so make sure you want to delete it permanently. You cannot delete assignments created by other users to maintain the integrity of the platform. </p>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default Faq;