declare const _default: {
    Query: {
        me: () => {
            id: string;
            name: string;
            avatar: string;
        };
        invitationDetails: (parent: any, { invitationId }: {
            invitationId: any;
        }) => {
            event: {
                id: string;
                cliqId: string;
                location: {
                    id: string;
                    url: string;
                    name: string;
                    address: {
                        address1: string;
                        address2: string;
                        address3: any;
                        city: string;
                        zipcode: string;
                        country: string;
                        state: string;
                    };
                    avatar: string;
                    rating: number;
                    reviewCount: number;
                };
                participants: any[];
                eventTime: Date;
                type: string;
                status: string;
            };
        };
        locations: () => any[];
    };
};
export default _default;
