import { Faker } from "@faker-js/faker/.";
import { useAppDispatch, useAppSelector } from ".";
import { setDataset } from "../store/common/actions";
import { commonSelectors } from "../store/common/selectors";

export const useCommon = () => {
  const actionType = useAppSelector(commonSelectors.actionType);
  const datasets = useAppSelector(commonSelectors.datasets);
  const dataset = useAppSelector(commonSelectors.dataset);
  const parameters = useAppSelector(commonSelectors.parameters);
  const length = useAppSelector(commonSelectors.length);

  const dispatch = useAppDispatch();
  const handleSetDataset = (val: keyof Faker) => {
    dispatch(setDataset(val));
  }

  return {
    actionType,
    handleSetDataset,
    datasets,
    dataset,
    parameters,
    length
  }
};
