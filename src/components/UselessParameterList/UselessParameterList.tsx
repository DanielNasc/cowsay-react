import { WhyDoYouPutTheseParams } from "./styles";

interface UselessParameterListProps {
  parameters: Array<string[]>; // [["parameterName", "parameterValue"]]
}

export function UselessParameterList({
  parameters,
}: UselessParameterListProps) {
  if (parameters.length === 0) {
    return null;
  }

  return (
    <div>
      <p>
        Bro, why are you using the parameters below if you don't need???????
      </p>
      <WhyDoYouPutTheseParams>
        {parameters.map(([key], index) => (
          <p key={key}>
            {key} <span>→</span> {parameters[index][1] /* parameterValue */}
          </p>
        ))}
      </WhyDoYouPutTheseParams>
    </div>
  );
}
