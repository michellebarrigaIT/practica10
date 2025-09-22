import './Step4.scss'

export default function Step4({ values }: { values: any }) {
    return (
        <div className="step4">
            <h3>Review your info:</h3>
            <pre>
                {JSON.stringify(values, null, 2)}
            </pre>
        </div>
    );
}
