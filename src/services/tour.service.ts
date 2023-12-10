/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITour } from "../interfaces/tour.interface";
import { TourModel } from "../models/tour.model";
import { filter } from "../helpers/filterHelper";

const createTour = async (tourData: ITour): Promise<ITour> => {
  const result = await TourModel.create(tourData);
  return result;
};

const getAllTours = async (query: any): Promise<ITour[]> => {
  const result = await filter(TourModel.find(), query);
  return result;
};

const getSingleTour = async (id: string): Promise<ITour | null> => {
  const result = await TourModel.findById(id);
  return result;
};

const updateTour = async (
  id: string,
  updatedData: ITour,
): Promise<ITour | null> => {
  const result = await TourModel.findByIdAndUpdate(id, updatedData, {
    runValidators: true,
    new: true,
  });
  return result;
};

const deleteTour = async (id: string): Promise<ITour | null> => {
  const result = await TourModel.findByIdAndDelete(id);
  return result;
};
const getNextSchedule = async (id: string) => {
  const tour = await TourModel.findById(id);
  const nextSchedule = tour?.getNextNearestDateAndEndDate();
  return {
    tour,
    nextSchedule,
  };
};

export const tourServices = {
  createTour,
  getAllTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
};
