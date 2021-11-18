import type { NextApiRequest, NextApiResponse } from "next";

import { cognito } from "config/default";

type Data = {
  name: string;
};

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await res.redirect(
      `https://${cognito.domain}/logout?client_id=${cognito.clientId}&logout_uri=http://localhost:3000`
    );
  } catch (error) {
    console.error(error);
    // TODO: error casting
    res.status(error.status || 400).end(error.message);
  }
};

export default logout;
