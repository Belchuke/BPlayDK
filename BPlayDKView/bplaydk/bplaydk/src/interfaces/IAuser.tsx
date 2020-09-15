import React from "react";
import { IAuserSeen } from "./IAuserSeen";

export interface IAuser{
  id: number,
  email: string,
  username: string,
  password: string,
  AuserTypeId: number,
  AuserSeen: Array<IAuserSeen>
}

