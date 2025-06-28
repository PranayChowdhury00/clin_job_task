// SubscriptionPage.jsx
import React, { useState, useEffect } from 'react';

const SubscriptionPage = () => {
  const [subscriptionData, setSubscriptionData] = useState({
    type: 'Loading...',
    expiry: ''
  });
  const [showPlans, setShowPlans] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const res = await fetch('https://alibackend.duckdns.org/authentication_app/user_profile/', {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
          }
        });
        const data = await res.json();
        setSubscriptionData({
          type: data.subscription_status || 'Free',
          expiry: data.subscription_expiry || 'Not available'
        });
      } catch (err) {
        console.error('Failed to load subscription:', err);
      }
    };

    fetchSubscription();
  }, [token]);

  const handleUpgrade = async (plan) => {
    if (!plan) return;
    setLoading(true);
    try {
      const res = await fetch('https://alibackend.duckdns.org/subscription/buy_subscription/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          Accept: 'application/json'
        },
        body: JSON.stringify({ subscription_plan: plan })
      });

      if (!res.ok) throw new Error('Upgrade failed');

      setSubscriptionData(prev => ({
        ...prev,
        type: plan === 'Individual' ? 'Individual' : 'Company Plan'
      }));
      setShowPlans(false);
      alert(`Successfully upgraded to ${plan} plan!`);
    } catch (error) {
      console.error('Error upgrading subscription:', error);
      alert('Error upgrading subscription');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateQuantity = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://alibackend.duckdns.org/subscription/update_subscription/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          Accept: 'application/json'
        },
        body: JSON.stringify({ quantity: parseInt(quantity, 10) })
      });

      if (!res.ok) throw new Error('Update failed');

      alert('User quantity updated successfully!');
    } catch (error) {
      console.error('Error updating quantity:', error);
      alert('Error updating user quantity');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Manage Subscription</h1>

      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">{subscriptionData.type}</h2>
            <p className="text-gray-500">Expires on: {subscriptionData.expiry}</p>
          </div>
          <button
            onClick={() => setShowPlans(!showPlans)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            disabled={loading}
          >
            {showPlans ? 'Close' : 'Upgrade Subscription'}
          </button>
        </div>
        {subscriptionData.type === 'Company Plan' && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Update User Quantity</label>
            <div className="flex gap-2">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-24 border border-gray-300 rounded px-2 py-1"
              />
              <button
                onClick={handleUpdateQuantity}
                disabled={loading}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                {loading ? 'Updating...' : 'Update'}
              </button>
            </div>
          </div>
        )}
      </div>

      {showPlans && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Individual Plan */}
          <div className={`border rounded-lg p-6 transition-all ${selectedPlan === 'Individual' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
            <h3 className="text-xl font-semibold mb-2">Individual</h3>
            <p className="text-3xl font-bold mb-4">$65</p>
            <p className="text-gray-600 mb-4">For individual Person</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                <span>Single user license</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                <span>Lifetime updates</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                <span>Secure, HIPAA-compliant data storage</span>
              </li>
            </ul>
            <button
              onClick={() => setSelectedPlan('Individual')}
              className={`w-full py-2 rounded-md ${selectedPlan === 'Individual' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-700 transition-colors`}
            >
              {selectedPlan === 'Individual' ? 'Selected' : 'Select'}
            </button>
          </div>

          {/* Company Plan */}
          <div className={`border rounded-lg p-6 transition-all ${selectedPlan === 'Company' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'} relative`}>
            <span className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-bl">Best value</span>
            <h3 className="text-xl font-semibold mb-2">Company Plan</h3>
            <p className="text-3xl font-bold mb-4">$650</p>
            <p className="text-gray-600 mb-4">For large teams, an unlimited number of library users.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                <span>Add up to 10 users</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                <span>Lifetime updates</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                <span>Upgrade any time</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                <span>Unlimited library users</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                <span>Secure, HIPAA-compliant data storage</span>
              </li>
            </ul>
            <button
              onClick={() => setSelectedPlan('Company')}
              className={`w-full py-2 rounded-md ${selectedPlan === 'Company' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-700 transition-colors`}
            >
              {selectedPlan === 'Company' ? 'Selected' : 'Select'}
            </button>
          </div>

          <div className="col-span-full flex justify-end space-x-3">
            <button
              onClick={() => setShowPlans(false)}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => handleUpgrade(selectedPlan)}
              disabled={!selectedPlan || loading}
              className={`px-4 py-2 rounded-md ${!selectedPlan ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white transition-colors`}
            >
              {loading ? 'Processing...' : 'Upgrade Now'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionPage;