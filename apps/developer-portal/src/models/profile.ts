/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 import { RolesMemberInterface } from "./roles";

/**
  * Multi-valued attribute model
  */
export interface MultiValue {
    type: string;
    value: string;
}

/**
 * Name model
 */
export interface Name {
    familyName: string;
    givenName: string;
}

/**
 * Profile Model
 */
export interface BasicProfileInterface {
    id: string;
    emails: string[] | MultiValue[];
    email?: string;
    phoneNumbers: MultiValue[];
    organisation: string;
    responseStatus: number;
    roles?: MultiValue[];
    name: Name;
    profileUrl: string;
    isSecurity?: boolean;
    userimage?: string;
    userName?: string;
    associations?: LinkedAccountInterface[];
    groups?: RolesMemberInterface[];
}

/**
 * Linked account interface.
 */
export interface LinkedAccountInterface {
    /**
     * Associated user's email address.
     */
    email: string;
    /**
     * Associated user's last name.
     */
    lastName: string;
    /**
     * Tenant domain.
     */
    tenantDomain: string;
    /**
     * ID of the associated user.
     */
    userId: string;
    /**
     * User store domain.
     */
    userStoreDomain: string;
    /**
     * Username of the associated user.
     */
    username: string;
}

/**
 * Profile schema interface.
 */
export interface ProfileSchema {
    claimValue: string;
    uniqueness: string;
    displayName: string;
    name: string;
    displayOrder: string;
    description: string;
    mutability: string;
    type: string;
    multiValued: boolean;
    caseExact: boolean;
    returned: string;
    required: boolean;
    subAttributes?: ProfileSchema[];
}

export const createEmptyProfile = (): BasicProfileInterface => ({
    associations: [],
    email: "",
    emails: [],
    groups: [],
    id: "",
    isSecurity: false,
    name: {
        familyName: "",
        givenName: ""
    },
    organisation: "",
    phoneNumbers: [],
    profileUrl: "",
    responseStatus: null,
    roles: [],
    userName: "",
    userimage: ""
});