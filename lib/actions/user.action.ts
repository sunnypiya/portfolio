"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { AddUpdateBasicInfoParams, CreateUserParams, DeleteUserParams, GetAllUsersParams, GetSavedQuestionsParams, GetUserByIdParams, ToggleSaveQuestionParams, UpdateUserParams } from "./shared.types";
import { revalidatePath } from "next/cache";
import BasicInfo from "@/database/basic_info.model";

export async function createUser(userData: CreateUserParams) {
    try {
        connectToDatabase();
        const newUser = await User.create(userData);

        return newUser;
    } catch (e) {
        console.log('error while creating the user', e);
        throw e;
    }
}
export async function deleteUser(userData: DeleteUserParams) {
    try {
        connectToDatabase();
        const { clerkId } = userData;
        const user = await User.findByIdAndDelete({ clerkId });
        if (!deleteUser) {
            throw new Error('User not found!!!');
        }

        // delete the everything that the user ever done
        // 1. delete user from db
        // 2. questions, answers, comments, etc.

        // get user questions ids
        // const userQuestionIds = await Question.find({ author: user._id }).distinct('_id');

        // Now deleting user questions
        ////await Question.deleteMany({ author: user._id });

        // TODO we will need to delete the answers, comments, etc using userQuestionIds

        const deletedUser = await User.findByIdAndDelete(user._id);
        return deletedUser;

    } catch (e) {
        console.log('error while deleting the user by Id', e);
        throw e;
    }
}
export async function updateUser(userData: UpdateUserParams) {
    try {
        connectToDatabase();
        const { clerkId, updateData, path } = userData;
        // const newUser = 
        await User.findOneAndUpdate({ clerkId }, updateData, { new: true });

        revalidatePath(path);
    } catch (e) {
        console.log('error while fetching the user by Id', e);
        throw e;
    }
}

export async function getuserById(params: any) {
    try {
        connectToDatabase();
        const { userId } = params;
        const user = await User.findOne({ clerkId: userId });

        return user;
    } catch (e) {
        console.log('error while fetching the user by Id', e);
        throw e;
    }
}
export async function getAllUsers(params: GetAllUsersParams) {
    try {
        connectToDatabase();
        // const { page = 1, pageSize = 20, filter, searchQuery } = params;
        const users = await User.find({})
            .sort({ createdAt: -1 });

        return { users };
    } catch (e) {
        console.log('error while fetching the user by Id', e);
        throw e;
    }
}

export async function toggleSaveQuestion(params: ToggleSaveQuestionParams) {
    try {
        connectToDatabase();
        const { path, questionId, userId } = params;
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }

        const isQuestionSaved = user.saved.includes(questionId);

        if (isQuestionSaved) {
            // remove question from saved
            await User.findByIdAndUpdate(userId,
                { $pull: { saved: questionId } },
                { new: true }
            )
        }
        else {
            // add question into saved
            await User.findByIdAndUpdate(userId,
                { $addToSet: { saved: questionId } },
                { new: true }
            )
        }
        revalidatePath(path);
    } catch (e) {
        console.log('error while fetching the user by Id', e);
        throw e;
    }
}

// export async function getSavedQuestionns(params: GetSavedQuestionsParams) {
//     try {
//         connectToDatabase();
//         const { clerkId, filter, page = 1, pageSize = 10, searchQuery } = params;
//         const query: FilterQuery<typeof Question> = searchQuery ? { title: { $regex: new RegExp(searchQuery, 'i') } } : {};
//         const user = await User.findOne({ clerkId }).populate({
//             path: 'saved',
//             match: query,
//             options: {
//                 sort: { createdAt: -1 },
//             },
//             populate: [
//                 {
//                     path: 'tags', model: Tag, select: "_id name"
//                 },
//                 {
//                     path: 'author', model: User, select: "_id clerkId name picture"
//                 }
//             ]
//         });
//         if (!user) {
//             throw new Error('User not found');
//         }
//         console.log('user', user);
//         const saveQuestions = user.saved;
//         return { questions: saveQuestions };
//     }
//     catch (error) {
//         console.log('getQuestionns: ', error);
//         throw error;
//     }
// }

export async function getUserInfo(params: GetUserByIdParams) {
    try {
        connectToDatabase();
        const { userId } = params;
        const user = await User.findOne({ clerkId: userId })

        if (!user) {
            throw new Error('User not found');
        }

        ////const totalQuestions = await Question.countDocuments({ author: user._id })
        ////const totalAnswers = await Answer.countDocuments({ author: user._id })

        return { user };
    } catch (e) {
        console.log('error while fetching the user by Id', e);
        throw e;
    }
}

export async function addUpdateBasicInfo(params: AddUpdateBasicInfoParams) {
    try {

        connectToDatabase();
        const { userId, fullName,
            description,
            yearOfExpirence,
            noOfProjects,
            noOfClients, path } = params;
        const user = await User.findOne({ _id: userId })

        if (!user) {
            throw new Error('User not found');
        }
        const basicInfo = await BasicInfo.findOne({ user: userId });
        const options = { new: true }; // This ensures that the returned value is the modified document
        console.log('basicInfo', basicInfo);
        if (!basicInfo) {
            const question = await BasicInfo.create({
                fullName,
                description,
                yearOfExpirence,
                noOfProjects,
                noOfClients,
                user: userId
            });
            revalidatePath(path);
            return question ? true : false;
        }
        else {
            const basicInfoUpdated = await BasicInfo.findOneAndUpdate({ user: userId }, {
                fullName,
                description,
                yearOfExpirence,
                noOfProjects,
                noOfClients,
            }, options);
            revalidatePath(path);
            return basicInfoUpdated ? true : false;
        }

    }
    catch (error) {
        console.log('addUpdateBasicInfo: ', error);
        throw error;
    }
}

export async function getBasicInfo(params: GetUserByIdParams) {
    try {

        connectToDatabase();
        const { userId } = params;
        // const user = await User.findOne({ _id: userId })

        // if (!user) {
        //     throw new Error('User not found');
        // }
        const basicInfo = await BasicInfo.findOne({ user: userId });
        return basicInfo;
    }
    catch (error) {
        console.log('getBasicInfo: ', error);
        throw error;
    }
}