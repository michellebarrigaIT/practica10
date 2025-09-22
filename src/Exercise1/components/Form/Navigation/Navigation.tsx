export default function Navigation({
    step,
    handleBack,
}: {
    step: number;
    handleBack: () => void;
}) {
    return (
        <div className="flex justify-between mt-4">
        {step > 0 && (
            <button
            type="button"
            onClick={handleBack}
            className="px-4 py-2 bg-gray-400 text-white rounded"
            >
            Back
            </button>
        )}
        <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
        >
            {step === 3 ? "Submit" : "Next"}
        </button>
        </div>
    );
}
