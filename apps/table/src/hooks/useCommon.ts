import { Faker } from "@faker-js/faker/.";
import { useAppDispatch, useAppSelector } from ".";
import { setCount, setDataset, setValue } from "../store/common/actions";
import { commonSelectors } from "../store/common/selectors";
import { useEffect } from "react";

export const useCommon = () => {
  const dispatch = useAppDispatch();

  const actionType = useAppSelector(commonSelectors.actionType);
  const datasets = useAppSelector(commonSelectors.datasets);
  const dataset = useAppSelector(commonSelectors.dataset);
  const columns = useAppSelector(commonSelectors.columns);
  const length = useAppSelector(commonSelectors.length);
  const data = useAppSelector(commonSelectors.data);
  const value = useAppSelector(commonSelectors.value)
  const filtered = useAppSelector(commonSelectors.filtered);
  const count = useAppSelector(commonSelectors.count);

  useEffect(() => {
    dispatch(setDataset('person'));
    dispatch(setValue('generate'));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    dispatch(setValue(val));
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Tab') {
      e.preventDefault();
      e.stopPropagation();
      alert('Tab pressed');
    }
  }

  const handleSetCount = (val: number) => {
    dispatch(setCount(val));
  }

  const handleSetDataset = (val: keyof Faker) => {
    dispatch(setDataset(val));
  }

  return {
    actionType,
    handleSetDataset,
    datasets,
    dataset,
    columns,
    length,
    data,
    value,
    handleChange,
    handleKeyDown,
    filtered,
    count,
    handleSetCount
  }
};
