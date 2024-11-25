/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePostDTO } from '../models/CreatePostDTO';
import type { PostDTO } from '../models/PostDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Get all posts
     * @returns PostDTO A list of posts
     * @throws ApiError
     */
    public static getPosts(): CancelablePromise<Array<PostDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts',
        });
    }
    /**
     * Create a new post
     * @returns PostDTO The created post
     * @throws ApiError
     */
    public static postPosts({
        requestBody,
    }: {
        requestBody: CreatePostDTO,
    }): CancelablePromise<PostDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/posts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get an post by ID
     * @returns PostDTO The post with the specified ID
     * @throws ApiError
     */
    public static getPosts1({
        id,
    }: {
        id: string,
    }): CancelablePromise<PostDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `post not found`,
            },
        });
    }
    /**
     * Update an post by ID
     * @returns PostDTO The updated post
     * @throws ApiError
     */
    public static putPosts({
        id,
        requestBody,
    }: {
        id: number,
        requestBody: CreatePostDTO,
    }): CancelablePromise<PostDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/posts/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `post not found`,
            },
        });
    }
    /**
     * Partially update an post by ID
     * @returns PostDTO The partially updated post
     * @throws ApiError
     */
    public static patchPosts({
        id,
        requestBody,
    }: {
        id: number,
        requestBody: {
            userId?: number;
            title?: string;
            body?: string;
        },
    }): CancelablePromise<PostDTO> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/posts/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `post not found`,
            },
        });
    }
    /**
     * Delete an post by ID
     * @returns void
     * @throws ApiError
     */
    public static deletePosts({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/posts/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `post not found`,
            },
        });
    }
}
