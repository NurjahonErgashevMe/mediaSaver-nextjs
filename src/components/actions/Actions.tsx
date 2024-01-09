import { Dispatch, FC, SetStateAction } from "react";
import s from "./Actions.module.css";
import {
  IconDeviceFloppy,
  IconSquareRoundedArrowLeft,
  IconTrash,
  IconSquareRoundedArrowRight,
} from "@tabler/icons-react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { onChange, onDelete } from "@/store/slices/upload";
import { IUpload } from "@/types/upload";
import clsx from "clsx";

interface ActionsType {
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  currentIndex: number;
}

const Actions: FC<ActionsType> = ({ setCurrentIndex, currentIndex }) => {
  const uploads = useAppSelector((state) => state.upload);
  const dispatch = useAppDispatch();
  const current = uploads?.[currentIndex];

  const deleteDisabled = uploads.length <= 1;
  const prevDisabled = currentIndex === 0;
  const nextDisabled =
    uploads.length <= 1 || uploads.length - 1 === currentIndex;

  const navigationConfirm = (): boolean => {
    if (!current.saved) {
      const deleting = confirm(
        "Вы не сохранили текущую медию . Не сохранить и перелистать?"
      );

      return deleting;
    }
    return true;
  };

  const handlePrev = (item: IUpload, disabled: boolean) => {
    if (navigationConfirm()) {
      dispatch(onDelete(item.fileKey));
    }
    setCurrentIndex((prev) => (disabled ? prev : prev - 1));
  };

  const handleNext = (item: IUpload, disabled: boolean) => {
    if (navigationConfirm()) {
      dispatch(onDelete(item.fileKey));
    }
    setCurrentIndex((prev) => (disabled ? prev : prev + 1));
  };

  const handleDelete = (id: string) => {
    if (deleteDisabled) {
      return;
    }
    dispatch(onDelete(id));
  };

  const handleChangeSaveStatus = (item: IUpload) => {
    dispatch(onChange({ ...item, saved: !item.saved }));
  };

  return (
    <div className={s.actions}>
      <button
        className={clsx(s.button, {
          [s.disabledWithNotAllowed]: prevDisabled,
        })}
        onClick={() => handlePrev(current, prevDisabled)}
      >
        <IconSquareRoundedArrowLeft />
      </button>
      <button
        className={clsx(s.button, {
          [s.disabled]: current?.saved ?? true,
        })}
        onClick={() => handleChangeSaveStatus(current)}
      >
        <IconDeviceFloppy />
      </button>
      <button
        className={clsx(s.button, {
          [s.disabledWithNotAllowed]: deleteDisabled,
        })}
        onClick={() => handleDelete(current.fileKey)}
      >
        <IconTrash />
      </button>
      <button
        className={clsx(s.button, {
          [s.disabledWithNotAllowed]: nextDisabled,
        })}
        onClick={() => handleNext(current, nextDisabled)}
      >
        <IconSquareRoundedArrowRight />
      </button>
    </div>
  );
};

export default Actions;
