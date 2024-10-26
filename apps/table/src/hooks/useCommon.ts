import { useAppDispatch, useAppSelector } from ".";
import { setDataset } from "../store/common/actions";
import { commonSelectors } from "../store/common/selectors";

export const useCommon = () => {
  const actionType = useAppSelector(commonSelectors.actionType);
  const datasets = useAppSelector(commonSelectors.datasets)
  const dispatch = useAppDispatch();
  const handleSetDataset = (val: string) => {
    dispatch(setDataset(val));
  }

  return {
    actionType,
    handleSetDataset,
    datasets
  }
};
