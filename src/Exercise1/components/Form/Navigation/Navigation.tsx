import './Navigation.scss'

export default function Navigation({
    step,
    handleBack,
}: {
    step: number;
    handleBack: () => void;
}) {
    return (
        <div className="navigation">
            {step > 0 && (
                <button
                    type="button"
                    onClick={handleBack}
                >
                    Back
                </button>
            )}
            <button
                type="submit"
            >
                {step === 3 ? "Submit" : "Next"}
            </button>
        </div>
    );
}
