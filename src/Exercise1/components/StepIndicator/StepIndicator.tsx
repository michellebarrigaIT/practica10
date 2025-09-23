import "./StepIndicator.scss";

type StepIndicatorProps = {
  step: number;
  steps: string[];
};

export default function StepIndicator({ step, steps }: StepIndicatorProps) {
    return (
        <div className="step-indicator">
        {steps.map((label, index) => {
            const status =
            index < step ? "completed" : index === step ? "active" : "pending";
            return (
            <div key={index} className={`step ${status}`}>
                <div className="circle">{index + 1}</div>
                <span className="label">{label}</span>
            </div>
            );
        })}
        </div>
    );
}
