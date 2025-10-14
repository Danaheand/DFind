export interface RootParamList {
  '/room-screen': { propertyId: string };
  'add-object': undefined;
  // Add other routes here if needed
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootParamList {}
  }
}