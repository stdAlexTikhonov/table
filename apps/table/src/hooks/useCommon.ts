import { useAppDispatch, useAppSelector } from ".";
import { commonSelectors } from "../store/common/selectors";

export const useCommon = () => {
  const actionType = useAppSelector(commonSelectors.actionType);
  const datasets = useAppSelector(commonSelectors.datasets)
  const dispatch = useAppDispatch();
  const handleSetDataset = (val: string) => {
    console.log(val);
  }

  return {
    actionType,
    handleSetDataset,
    datasets
  }
};
