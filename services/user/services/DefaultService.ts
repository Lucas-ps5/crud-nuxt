/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Créer un nouvel utilisateur
     * Permet de créer un utilisateur dans le système.
     * @returns User Utilisateur créé avec succès.
     * @throws ApiError
     */
    public static createUser({
        requestBody,
    }: {
        requestBody: {
            username: string;
            email: string;
            password: string;
        },
    }): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Erreur de validation des données.`,
            },
        });
    }
    /**
     * Obtenir la liste des utilisateurs
     * Retourne une liste paginée des utilisateurs.
     * @returns User Liste des utilisateurs.
     * @throws ApiError
     */
    public static getUsers({
        page,
        limit,
    }: {
        /**
         * Numéro de la page.
         */
        page?: number,
        /**
         * Nombre d'utilisateurs par page.
         */
        limit?: number,
    }): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }
    /**
     * Obtenir les détails d'un utilisateur
     * Retourne les informations d'un utilisateur spécifique.
     * @returns User Informations de l'utilisateur.
     * @throws ApiError
     */
    public static getUserById({
        id,
    }: {
        /**
         * ID de l'utilisateur.
         */
        id: string,
    }): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Utilisateur non trouvé.`,
            },
        });
    }
    /**
     * Mettre à jour un utilisateur
     * Met à jour les informations d'un utilisateur existant.
     * @returns User Utilisateur mis à jour avec succès.
     * @throws ApiError
     */
    public static updateUser({
        id,
        requestBody,
    }: {
        /**
         * ID de l'utilisateur.
         */
        id: string,
        requestBody: {
            username?: string;
            email?: string;
            password?: string;
        },
    }): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Erreur de validation des données.`,
                404: `Utilisateur non trouvé.`,
            },
        });
    }
    /**
     * Supprimer un utilisateur
     * Supprime un utilisateur existant.
     * @returns void
     * @throws ApiError
     */
    public static deleteUser({
        id,
    }: {
        /**
         * ID de l'utilisateur.
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Utilisateur non trouvé.`,
            },
        });
    }
}
