import { endpointBE } from "../layouts/utils/Constant";
import FeedbackModel from "../model/FeedbackModel";
import { requestAdmin } from "./Request";

export async function getAllFeedback(): Promise<FeedbackModel[]> {
   const endpoint = endpointBE + "/feedbacks?sort=idFeedback,desc";
   const response = await requestAdmin(endpoint);

   let feedbacks: FeedbackModel[] = [];

   if (response) {
      feedbacks = await response._embedded.feedbackses.map((feedbackData: any) => ({
         ...feedbackData,
         user: feedbackData._embedded.user.username,
      }))
   }

   return feedbacks;
}