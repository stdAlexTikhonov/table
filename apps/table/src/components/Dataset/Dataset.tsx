import { Faker } from "@faker-js/faker/.";
import { useCommon } from "../../hooks"
import { Types } from "../../store/const";

export const Dataset = () => {
  const { actionType, filtered, handleSetDataset } = useCommon();
  return actionType === Types.Dataset
  && <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
      {filtered.map(item => <div key={item} style={{ cursor: 'pointer' }} onClick={() => handleSetDataset(item as keyof Faker)}>{item}</div>)}
    </div>
}
