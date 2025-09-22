export default function Step4({ values }: { values: any }) {
    return (
        <div>
            <h3>Review your info:</h3>
            <pre>
                {JSON.stringify(values, null, 2)}
            </pre>
        </div>
    );
}
